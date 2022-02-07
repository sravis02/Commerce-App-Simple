import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import spacing from "../../constants/stylingValues";
import { TextProductTitle } from "../Texts/Texts";

export default function ProductCardSmall({
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png",
  title = "Insert Product Title",
  onPress,
  style,
}) {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 115, height: 115, borderRadius: 2.5 }}
      />
      <TextProductTitle>{title}</TextProductTitle>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    width: 115,
  },
});
