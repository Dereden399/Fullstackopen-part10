import { StyleSheet, View } from "react-native";
import Text from "../Text";

const RepositoryItemInfoRow = ({ repo }) => {
  return (
    <View style={styles.infoRowContainer}>
      <RepositoryItemInfoRowItem number={repo.stargazersCount} text={"Stars"} />
      <RepositoryItemInfoRowItem number={repo.forksCount} text={"Forks"} />
      <RepositoryItemInfoRowItem number={repo.reviewCount} text={"Reviews"} />
      <RepositoryItemInfoRowItem number={repo.ratingAverage} text={"Rating"} />
    </View>
  );
};

const RepositoryItemInfoRowItem = ({ number, text }) => {
  return (
    <View style={styles.infoRowItem}>
      <Text
        style={styles.infoRowHeading}
        fontWeight="bold"
        fontSize="subheading"
      >
        {number < 1000 ? number : "" + Math.floor(number / 100) / 10 + "k"}
      </Text>
      <Text
        style={styles.infoRowSubheading}
        fontSize="subheading"
        color="secondary"
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRowContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginTop: 15,
  },
  infoRowItem: {
    flexDirection: "column",
    alignItems: "center",
  },
  infoRowHeading: {
    textAlign: "center",
  },
  infoRowSubheading: {
    textAlign: "center",
  },
});

export default RepositoryItemInfoRow;
