import {useParams} from "next/navigation";

export const useRouteParam = (paramName: string): string => {
  const params = useParams();
  const paramValue = params[paramName];

  if (!paramValue) {
    throw new Error(`Parâmetro '${paramName}' não encontrado na URL`);
  }

  return paramValue as string;
};
