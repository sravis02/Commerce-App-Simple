import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../../constants/globalStyles";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetBadge } from "../../../redux/slices/cartSlice";
import { useRemoveFromCartMutation } from "../../../redux/apis/productsApi";
import ScreenView from "../../../components/ScreenView/ScreenView";
import {
  TextProductPrice,
  TextScreenHeader,
  TextScreenSubTitle,
  TextTitleSmall,
} from "../../../components/Texts/Texts";
import { spacing, SPACING_HORIZONTAL } from "../../../constants/stylingValues";
import ProductCardList from "../../../components/ProductCard/ProductCartList";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../constants/colors";
import IconButton from "../../../components/IconButton/IconButton";

const ValueRow = ({ title, value, containerStyle }) => {
  return (
    <View style={[styles.rowContainer, containerStyle]}>
      <TextTitleSmall>{title}</TextTitleSmall>
      <TextProductPrice>{value}</TextProductPrice>
    </View>
  );
};

export default function CartTotalSummary({
  containerStyle,
  taxPrice,
  shippingPrice,
  totalPrice,
  onPressPurchase,
  isCheckoutReady,
}) {
  return (
    <View>
      <View style={styles.topContainer}>
        <ValueRow title="Shipping" value={shippingPrice} />
        <ValueRow title="Tax" value={taxPrice} />
      </View>
      <ValueRow
        title="Total"
        value={totalPrice}
        containerStyle={styles.totalContainer}
      />
      {isCheckoutReady && (
        <IconButton
          backgroundColor={colors.black}
          title="Purchase"
          onPress={onPressPurchase}
          containerStyle={styles.purchaseButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  topContainer: {
    backgroundColor: colors.grey0,
    marginBottom: spacing.sm,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.sm,
  },
  totalContainer: {
    backgroundColor: colors.grey0,
    marginBottom: spacing.lg,
  },
  purchaseButton: {
    marginHorizontal: SPACING_HORIZONTAL,
  },
});
