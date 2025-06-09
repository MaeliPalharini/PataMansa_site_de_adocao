"use client";

import React, {useState, useEffect, useMemo, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {FaHeart, FaMapMarkerAlt, FaCalendarAlt} from "react-icons/fa";
import {toast} from "@/ui/CustomToaster";
import {PetInfos} from "@/types/pet";
import {Formulário} from "@/types/formulario";

const mockDogs: PetInfos[] = [
  {
    porte: "pequeno",
    petId: "1",
    ownerId: "yes",
    nome: "Rex",
    raca: "Golden Retriever",
    idade: 3,
    fotoUrl: "/defaultdog.png",
    localizacao: "São Paulo, SP",
    descricao: "Rex é um cão muito carinhoso e brincalhão...",
    status: "adopted",
  },
  {
    porte: "pequeno",
    petId: "2",
    ownerId: "yes",
    nome: "Luna",
    idade: 2,
    raca: "Border Collie",
    fotoUrl:
      "https://imidades.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
    localizacao: "Rio de Janeiro, RJ",
    descricao: "Luna é extremamente inteligente e energética...",
    status: "adopted",
  },
  {
    porte: "pequeno",
    petId: "3",
    ownerId: "yes",
    nome: "Thor",
    idade: 5,
    raca: "Pastor Alemão",
    fotoUrl:
      "https://imidades.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
    localizacao: "Belo Horizonte, MG",
    descricao: "Thor é um cão leal e protetor...",
    status: "adopted",
  },
  {
    porte: "pequeno",
    petId: "4",
    ownerId: "yes",
    nome: "Bella",
    idade: 1,
    raca: "Labrador",
    fotoUrl:
      "https://imidades.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    localizacao: "Porto Alegre, RS",
    descricao: "Bella é uma cadela jovem, muito dócil e amorosa...",
    status: "pending",
  },
  {
    porte: "pequeno",
    petId: "5",
    ownerId: "yes",
    nome: "Max",
    idade: 4,
    raca: "Bulldog Francês",
    fotoUrl:
      "https://imidades.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    localizacao: "Brasília, DF",
    descricao: "Max é um cão calmo e muito companheiro...",
    status: "adopted",
  },
];

interface AdoptionPanelProps {
  type: "adopter" | "advertiser";
  userId: string;
  formulario?: Formulário[];
}

const STATUS_ORDER = {
  pending: 0,
  adopted: 1,
  available: 2,
};

const AdoptionPanel: React.FC<AdoptionPanelProps> = ({
  type,
  formulario = [],
}) => {
  const [dogs, setDogs] = useState(mockDogs);
  const [selectedDog, setSelectedDog] = useState<PetInfos | null>(null);

  const sortedmockDogs = useMemo(() => {
    return [...(mockDogs ?? [])].sort(
      (a, b) =>
        STATUS_ORDER[a.status as keyof typeof STATUS_ORDER] -
        STATUS_ORDER[b.status as keyof typeof STATUS_ORDER]
    );
  }, [mockDogs]);

  const formularioSelecionado = useMemo(() => {
    if (type !== "advertiser" || !selectedDog) return null;
    return formulario.find((f) => f.petId === selectedDog.petId) || null;
  }, [formulario, selectedDog, type]);

  useEffect(() => {
    if (sortedmockDogs.length === 0) {
      setSelectedDog(null);
      return;
    }
    setSelectedDog((prev) => {
      if (prev && sortedmockDogs.find((d) => d.petId === prev.petId)) {
        return prev;
      }
      return sortedmockDogs[0];
    });
  }, [sortedmockDogs]);

  const getDogNameById = useCallback(
    (id: string) => dogs.find((dog) => dog.petId === id)?.nome || "cachorro",
    [dogs]
  );

  const updateDogStatus = useCallback(
    (dogId: string, status: PetInfos["status"], adoptionDate = "") => {
      setDogs((prev) =>
        prev.map((dog) =>
          dog.petId === dogId ? {...dog, status, adoptionDate} : dog
        )
      );
    },
    []
  );

  const handleCancelAdoption = useCallback(
    (dogId: string) => {
      updateDogStatus(dogId, "disponivel", "");
      if (selectedDog?.petId === dogId) setSelectedDog(null);
      toast.error(`Adoção de ${getDogNameById(dogId)} foi cancelada!`);
    },
    [getDogNameById, selectedDog, updateDogStatus]
  );

  const handleApproveAdoption = useCallback(
    (dogId: string) => {
      const today = new Date().toISOString().split("T")[0];
      updateDogStatus(dogId, "adopted", today);
      const adoptedDog = dogs.find((dog) => dog.petId === dogId) || null;
      setSelectedDog(adoptedDog);
      toast.success(`Adoção de ${getDogNameById(dogId)} foi aprovada!`);
    },
    [dogs, getDogNameById, updateDogStatus]
  );

  const handleRejectAdoption = useCallback(
    (dogId: string) => {
      updateDogStatus(dogId, "available", "");
      if (selectedDog?.petId === dogId) setSelectedDog(null);
      toast.error(
        `Solicitação de adoção de ${getDogNameById(dogId)} foi rejeitada.`
      );
    },
    [getDogNameById, selectedDog, updateDogStatus]
  );

  const getTitle = useMemo(() => {
    if (type === "adopter") {
      return `Meus mockDogs Adotados (${sortedmockDogs.length})`;
    }
    return `Solicitações de Adoção (${
      sortedmockDogs.filter((dog) => dog.status === "pending").length
    })`;
  }, [type, sortedmockDogs]);

  const getStatusBadge = useCallback((dog: PetInfos) => {
    const baseClass = "px-2 py-1 rounded-md text-xs font-medium";
    switch (dog.status) {
      case "adopted":
        return (
          <span className={`${baseClass} bg-green-100 text-green-800`}>
            Adotado
          </span>
        );
      case "pending":
        return (
          <span className={`${baseClass} bg-yellow-100 text-yellow-800`}>
            Pendente
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-gray-100 text-gray-800`}>
            Disponível
          </span>
        );
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-[var(--light-yellow)] px-6 py-20 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto">
        <header className="text-center mb-8 flex-shrink-0">
          <h1 className="text-4xl font-bold text-[var(--brown)] mb-2">
            {type === "adopter" ? "Painel do Adotante" : "Painel do Anunciante"}
          </h1>
          <p className="text-[var(--gray)] text-lg">
            {type === "adopter"
              ? "Gerencie seus cachorros adotados"
              : "Gerencie as solicitações de adoção"}
          </p>
        </header>

        <div className="flex max-[735px]:flex-col gap-6 overflow-hidden justify-center max-[735px]:items-center">
          <motion.section
            className="w-full lg:w-5/12 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-[500px]"
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5}}
          >
            <div className="p-6 border-b flex-shrink-0">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <FaHeart className="text-red-500" />
                {getTitle}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto min-[735px]:max-h-[80vh] max-h-[35vh] p-4">
              <div className="space-y-3">
                <AnimatePresence>
                  {sortedmockDogs.map((dog, index) => (
                    <motion.div
                      key={index}
                      initial={{y: 50, opacity: 0}}
                      animate={{y: 0, opacity: 1}}
                      exit={{opacity: 0, y: 20}}
                      transition={{delay: index * 0.05}}
                      className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        selectedDog?.petId === dog.petId
                          ? "border-indigo-500 bg-indigo-50 shadow-sm"
                          : "border-gray-200 hover:border-indigo-300"
                      }`}
                      onClick={() => setSelectedDog(dog)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={dog.fotoUrl}
                          alt={dog.nome}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                          loading="lazy"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 truncate">
                            {dog.nome}
                          </h3>
                          <p className="text-sm text-gray-500 truncate">
                            {dog.raca} • {dog.idade} anos
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          {getStatusBadge(dog)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {sortedmockDogs.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>
                      {type === "adopter"
                        ? "Você ainda não adotou nenhum cachorro."
                        : "Nenhuma solicitação pendente."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="w-full max-w-[500px] flex flex-col bg-white rounded-lg shadow-lg overflow-y-auto"
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5}}
          >
            {selectedDog ? (
              <div className="p-8 flex flex-col h-full">
                <div className="flex gap-8 flex-wrap max-[900px]:flex-col items-center mb-6">
                  <img
                    src={selectedDog.fotoUrl}
                    alt={selectedDog.nome}
                    className="w-48 h-48 rounded-lg object-cover flex-shrink-0 shadow-md"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-2 flex-1 w-full">
                    <h2 className="text-3xl font-bold text-[var(--brown)] mb-2">
                      {selectedDog.nome}
                    </h2>
                    <div className="flex flex-col gap-4 text-gray-600 text-sm flex-wrap">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <span>{selectedDog.idade} anos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{selectedDog.localizacao}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {type === "adopter"
                      ? "Sobre o cachorro"
                      : "Informações do formulário"}
                  </h3>
                  {type === "adopter" ? (
                    <p className="text-gray-700">{selectedDog.descricao}</p>
                  ) : formularioSelecionado ? (
                    <div className="flex flex-col gap-2 text-gray-700 text-sm">
                      <div>
                        <strong>Email:</strong>{" "}
                        {formularioSelecionado.email ?? "N/A"}
                      </div>
                      <div>
                        <strong>Telefone:</strong>{" "}
                        {formularioSelecionado.telefone ?? "N/A"}
                      </div>
                      <div>
                        <strong>Motivo:</strong> {formularioSelecionado.motivo}
                      </div>
                      <div>
                        <strong>Ambiente:</strong>{" "}
                        {formularioSelecionado.ambiente}
                      </div>
                      <div>
                        <strong>Espaço externo:</strong>{" "}
                        {formularioSelecionado.espacoExterno ? "Sim" : "Não"}
                      </div>
                      <div>
                        <strong>Teve animais antes:</strong>{" "}
                        {formularioSelecionado.teveAnimaisAntes ? "Sim" : "Não"}
                      </div>
                      <div>
                        <strong>Ambiente seguro:</strong>{" "}
                        {formularioSelecionado.ambienteSeguro ? "Sim" : "Não"}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      Nenhuma informação adicional disponível.
                    </p>
                  )}
                </div>
                <div className="mt-6 flex gap-4 self-center justify-self-center">
                  {type === "adopter" && selectedDog.status === "pending" && (
                    <button
                      onClick={() => handleCancelAdoption(selectedDog.petId)}
                      className="px-6 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                    >
                      Cancelar Adoção
                    </button>
                  )}

                  {type === "advertiser" &&
                    selectedDog.status === "pending" && (
                      <>
                        <button
                          onClick={() =>
                            handleApproveAdoption(selectedDog.petId)
                          }
                          className="px-6 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                        >
                          Aprovar
                        </button>
                        <button
                          onClick={() =>
                            handleRejectAdoption(selectedDog.petId)
                          }
                          className="px-6 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                        >
                          Rejeitar
                        </button>
                      </>
                    )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-full text-gray-400 p-8">
                <p>
                  {type === "adopter"
                    ? "Selecione um cachorro para ver detalhes"
                    : "Selecione uma solicitação para ver detalhes"}
                </p>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AdoptionPanel;
