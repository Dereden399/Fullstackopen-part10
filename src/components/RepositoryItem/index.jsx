import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryItemInfoRow from "./RepositoryItemInfoRow";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardColor,
    padding: 15,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.card}>
      <RepositoryItemHeader repo={repo} />
      <RepositoryItemInfoRow repo={repo} />
    </View>
  );
};

export default RepositoryItem;
