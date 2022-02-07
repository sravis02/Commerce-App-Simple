import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import spacing from "../../constants/stylingValues";
import { TextProductPrice, TextProductTitle } from "../Texts/Texts";

export default function ProductCardMedium({
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png",
  title = "Insert Product Title",
  price = 0,
  onPress,
  style,
}) {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 150, height: 150, borderRadius: 2.5 }}
      />
      <TextProductTitle numberOfLines={2}>{title}</TextProductTitle>

      {/* The below placeholder is needed because of the absolute position of product price  */}
      <TextProductPrice></TextProductPrice>
      <TextProductPrice style={styles.productPrice} numberOfLines={2}>
        {price}
      </TextProductPrice>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    width: 150,
  },
  productPrice: {
    textAlign: "right",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
