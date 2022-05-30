import { useQuery} from '@apollo/client';
import { GET_ALL_ANIME } from '../graphql/Queries';

export const useAnime = (page, perPage) => {

  const {data, loading, error} = useQuery(GET_ALL_ANIME, {
    variables: {
      page: page,
      perPage: perPage
    }
  });

  return {
    data,
    loading,
    error
  };
};

