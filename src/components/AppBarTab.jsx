import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, to, style }) => {
  return (
    <Link to={to} style={style || {}}>
      <Text color={"white"} fontSize={"subheading"} fontWeight={"bold"}>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
