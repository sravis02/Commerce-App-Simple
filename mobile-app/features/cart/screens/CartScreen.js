import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import globalStyles from "../../../constants/globalStyles";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetBadge } from "../../../redux/slices/cartSlice";
import { useGetCartInfoQuery } from "../../../redux/apis/productsApi";
import ScreenView from "../../../components/ScreenView/ScreenView";
import {
  TextScreenHeader,
  TextScreenSubTitle,
} from "../../../components/Texts/Texts";
import { spacing } from "../../../constants/stylingValues";
import ProductsList from "../components/ProductsList";
import Placeholder from "../../../components/Placeholder/Placeholder";
import CartTotalSummary from "../components/CartTotalSummary";
import CartEmptyView from "../components/CartEmptyView";
import useStripeSimplified from "../../../utils/hooks/use-stripe-simplified";

export default function CartScreen({ navigation }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => dispatch(resetBadge()), [isFocused]);

  const cartId = useSelector((state) => state.cart.cartId);
  // First fetch probably invalid when cartid is null, second with cartid as uuid will be successfull then
  const { data = null, isSuccess } = useGetCartInfoQuery(cartId, {
    skip: !cartId,
  });

  const { openPaymentSheet, isCheckoutReady } = useStripeSimplified(cartId);

  return (
    <ScreenView
      style={globalStyles.screen}
      paddingHorizontal={0}
      screenBottomSpace={true}
    >
      <ScreenView style={styles.headerContainer} safeView={false}>
        <TextScreenHeader>Shopping Cart</TextScreenHeader>
      </ScreenView>
      {!!data && data.products.length == 0 && <CartEmptyView />}
      {!!data && data.products.length > 0 && (
        <>
          <ProductsList
            containerStyle={styles.productsList}
            data={data ? data.products : []}
          />
          <CartTotalSummary
            taxPrice={data ? data.tax_price : "-.--"}
            shippingPrice={data ? data.shipping_price : "-.--"}
            totalPrice={data ? data.total_price : "-.--"}
            onPressPurchase={openPaymentSheet}
            isCheckoutReady={isCheckoutReady}
          />
          <Placeholder size={30} />
        </>
      )}
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: spacing.md,
  },
  productsList: {
    flex: 0.5,
    paddingVertical: spacing.md,
  },
  placeholderDelete: {
    flex: 0.5,
    backgroundColor: "green",
  },
});
