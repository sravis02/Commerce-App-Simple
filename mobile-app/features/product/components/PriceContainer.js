import { View, StyleSheet } from "react-native";
import {
  TextButtonTitle,
  TextProductPriceBig,
} from "../../../components/Texts/Texts";
import colors from "../../../constants/colors";
import { spacing } from "../../../constants/stylingValues";

const PriceContainer = ({ containerStyle, price }) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <TextButtonTitle style={styles.priceTitle}>Price:</TextButtonTitle>
      <TextProductPriceBig style={styles.priceValue}>
        {price}
      </TextProductPriceBig>
    </View>
  );
};
export default PriceContainer;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  priceTitle: {
    color: colors.black,
    marginRight: spacing.xs,
  },
  priceValue: {},
});
