import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useUser = () => {
  const { data, error, loading, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  return { user: data?.me, error, loading, refetch };
};

export default useUser;
