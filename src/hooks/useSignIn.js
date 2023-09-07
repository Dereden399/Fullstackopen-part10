import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [authenticate, result] = useMutation(AUTHENTICATE);

  const signIn = async (username, password) => {
    const variables = {
      credentials: {
        username,
        password,
      },
    };
    const response = await authenticate({ variables: variables });
    if (response.data) {
      await authStorage.setAccessToken(response.data.authenticate.accessToken);
      apolloClient;
    }
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
