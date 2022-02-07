import { StyleSheet, Text, View, Image } from "react-native";
import { SCREEN_BOTTOM_SPACE } from "../../constants/stylingValues";

export default function Placeholder({
  size = SCREEN_BOTTOM_SPACE,
  secondarySize = "100%",
  isHorizontal = true,
}) {
  return (
    <View
      style={{
        width: isHorizontal ? secondarySize : size,
        height: isHorizontal ? size : secondarySize,
      }}
    />
  );
}
