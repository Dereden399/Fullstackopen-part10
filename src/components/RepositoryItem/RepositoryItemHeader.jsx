import { Image, StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const RepositoryItemHeader = ({ repo }) => {
  return (
    <View style={styles.cardHeader}>
      <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
      <View style={styles.cardHeaderList}>
        <Text fontSize={"heading"} fontWeight={"bold"}>
          {repo.fullName}
        </Text>
        <Text
          style={styles.textDescription}
          fontSize={"heading"}
          color={"secondary"}
        >
          {repo.description}
        </Text>
        <View style={styles.languageTag}>
          <Text color={"white"} fontSize="subheading">
            {repo.language}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  cardHeaderList: {
    flexDirection: "column",
    flexShrink: 1,
    alignItems: "flex-start",
    marginStart: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  textDescription: {
    marginTop: 5,
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
});

export default RepositoryItemHeader;
