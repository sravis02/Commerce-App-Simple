import { StyleSheet } from "react-native";
import colors from "./colors";

const globalStyles = StyleSheet.create({
  screenDefault: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },

  discoverImage: {
    width: "100%",
    aspectRatio: 0.9,
  },
});

export default globalStyles;
