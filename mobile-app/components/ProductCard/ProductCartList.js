import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { spacing } from "../../constants/stylingValues";
import {
  TextProductPrice,
  TextProductTitle,
  TextSubTitleSmall,
} from "../Texts/Texts";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function ProductCardList({
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png",
  title = "Insert Product Title",
  subTitle = "Subtitle",
  price = "--,--",
  onPressProduct,
  onPressDelete,
  style,
}) {
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity onPress={onPressProduct}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 115, height: 115, borderRadius: 2.5 }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Ionicons
          name="add"
          size={24}
          color={colors.greyTextBox}
          style={styles.deleteIcon}
          onPress={onPressDelete}
        />
        <TextProductTitle numberOfLines={1}>{title}</TextProductTitle>
        <TextSubTitleSmall numberOfLines={1}>{subTitle}</TextSubTitleSmall>
        <TextProductPrice style={styles.price}>{price}</TextProductPrice>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    height: 115,
    width: "100%",
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  price: {
    position: "absolute",
    bottom: 0,
    right: 0,
    textAlign: "right",
  },
  deleteIcon: {
    alignSelf: "flex-end",
    transform: [{ rotateZ: "45deg" }],
  },
});
