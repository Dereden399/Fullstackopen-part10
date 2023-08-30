import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: "#fafafa",
    primary: '#0366d6',
    containerColor: "#e1e4e8",
    cardColor: "white",
    errorColor: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System"
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;