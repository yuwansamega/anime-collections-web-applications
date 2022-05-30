import { useQuery } from "@apollo/client";
import { GET_ANIME } from "../graphql/Queries";

export const useAnimeDetail = (id) => {

  const {data, loading, error} = useQuery(GET_ANIME, {
    variables : {
      id: id,
    },
  });

  return {
    data,
    loading,
    error
  };
};