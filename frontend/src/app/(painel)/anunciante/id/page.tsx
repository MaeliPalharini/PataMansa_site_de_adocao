"use client";

import React from "react";
import AdoptionPanel from "../../painelLayout";

interface Dog {
  id: string;
  name: string;
  age: number;
  breed: string;
  weight: number;
  temperament: string;
  imageUrl: string;
  adoptionDate: string;
  location: string;
  ownerId: string;
  description: string;
  status: "adopted" | "available" | "pending";
}

const userId = "user-123";

const mockDogs: Dog[] = [
  {
    id: "1",
    name: "Rex",
    ownerId: "yes",
    age: 3,
    breed: "Golden Retriever",
    weight: 25,
    temperament: "Carinhoso e brincalhão",
    imageUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-15",
    location: "São Paulo, SP",
    description: "Rex é um cão muito carinhoso e brincalhão...",
    status: "adopted",
  },
  {
    id: "2",
    ownerId: "yes",
    name: "Luna",
    age: 2,
    breed: "Border Collie",
    weight: 18,
    temperament: "Inteligente e energética",
    imageUrl:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-20",
    location: "Rio de Janeiro, RJ",
    description: "Luna é extremamente inteligente e energética...",
    status: "adopted",
  },
  {
    id: "3",
    ownerId: "yes",
    name: "Thor",
    age: 5,
    breed: "Pastor Alemão",
    weight: 30,
    temperament: "Leal e protetor",
    imageUrl:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-10",
    location: "Belo Horizonte, MG",
    description: "Thor é um cão leal e protetor...",
    status: "adopted",
  },
  {
    id: "4",
    ownerId: "yes",
    name: "Bella",
    age: 1,
    breed: "Labrador",
    weight: 20,
    temperament: "Dócil e amorosa",
    imageUrl:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    adoptionDate: "",
    location: "Porto Alegre, RS",
    description: "Bella é uma cadela jovem, muito dócil e amorosa...",
    status: "pending",
  },
  {
    id: "5",
    ownerId: "yes",
    name: "Max",
    age: 4,
    breed: "Bulldog Francês",
    weight: 12,
    temperament: "Calmo e companheiro",
    imageUrl:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-25",
    location: "Brasília, DF",
    description: "Max é um cão calmo e muito companheiro...",
    status: "adopted",
  },
  {
    id: "1",
    name: "Rex",
    ownerId: "yes",
    age: 3,
    breed: "Golden Retriever",
    weight: 25,
    temperament: "Carinhoso e brincalhão",
    imageUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-15",
    location: "São Paulo, SP",
    description: "Rex é um cão muito carinhoso e brincalhão...",
    status: "adopted",
  },
  {
    id: "2",
    ownerId: "yes",
    name: "Luna",
    age: 2,
    breed: "Border Collie",
    weight: 18,
    temperament: "Inteligente e energética",
    imageUrl:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-20",
    location: "Rio de Janeiro, RJ",
    description: "Luna é extremamente inteligente e energética...",
    status: "adopted",
  },
  {
    id: "3",
    ownerId: "yes",
    name: "Thor",
    age: 5,
    breed: "Pastor Alemão",
    weight: 30,
    temperament: "Leal e protetor",
    imageUrl:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-10",
    location: "Belo Horizonte, MG",
    description: "Thor é um cão leal e protetor...",
    status: "adopted",
  },
  {
    id: "4",
    ownerId: "yes",
    name: "Bella",
    age: 1,
    breed: "Labrador",
    weight: 20,
    temperament: "Dócil e amorosa",
    imageUrl:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    adoptionDate: "",
    location: "Porto Alegre, RS",
    description: "Bella é uma cadela jovem, muito dócil e amorosa...",
    status: "pending",
  },
  {
    id: "5",
    ownerId: "yes",
    name: "Max",
    age: 4,
    breed: "Bulldog Francês",
    weight: 12,
    temperament: "Calmo e companheiro",
    imageUrl:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    adoptionDate: "2024-05-25",
    location: "Brasília, DF",
    description: "Max é um cão calmo e muito companheiro...",
    status: "adopted",
  },
];

const Adotante = () => {
  return <AdoptionPanel type="advertiser" pets={mockDogs} userId={userId} />;
};

export default Adotante;
