import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import Text from "./Text";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardColor,
    padding: 10,
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
  },
});

const SignOut = () => {
  const nav = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  useEffect(() => {
    const func = async () => {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      nav("/signin");
    };
    func();
  }, []);
  return (
    <View style={styles.container}>
      <Text fontSize={"heading"}>Redirecting...</Text>
    </View>
  );
};

export default SignOut;
