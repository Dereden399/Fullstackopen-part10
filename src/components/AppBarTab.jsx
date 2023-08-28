import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, to, style }) => {
  return (
    <Link to={to}>
      <Text
        color={"white"}
        fontSize={"subheading"}
        fontWeight={"bold"}
        style={style || {}}
      >
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
