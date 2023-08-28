import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";
import SignIn from "./components/SignIn";
import { Navigate, Route, Routes } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.containerColor,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
