import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useUser from "../hooks/useUser";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
});

const AppBar = () => {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={"Repositories"} to="/" />
        {user ? (
          <AppBarTab text="Sign out" to="/signout" style={{ marginStart: 5 }} />
        ) : (
          <AppBarTab text={"Sign in"} to="/signin" style={{ marginStart: 5 }} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
