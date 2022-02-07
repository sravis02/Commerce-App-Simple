import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../../constants/globalStyles";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetBadge } from "../../../redux/slices/cartSlice";
import { useRemoveFromCartMutation } from "../../../redux/apis/productsApi";
import ScreenView from "../../../components/ScreenView/ScreenView";
import {
  TextScreenHeader,
  TextScreenSubTitle,
} from "../../../components/Texts/Texts";
import { spacing } from "../../../constants/stylingValues";
import ProductCardList from "../../../components/ProductCard/ProductCartList";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import { useNavigation } from "@react-navigation/native";

export default function ProductsList({ containerStyle, data }) {
  const navigation = useNavigation();
  const cartId = useSelector((state) => state.cart.cartId);

  const [removeProductFromCart, removeProductResult] =
    useRemoveFromCartMutation();

  const onPressDelete = (productId) => {
    let productIds = [{ id: productId }];
    removeProductFromCart({ cartId, productIds });
  };

  const onPressProduct = (item) => navigation.navigate("Cart-Product", item);

  return (
    <ScreenView
      style={[styles.wrapper, containerStyle]}
      scrollView
      safeView={false}
    >
      {data.map((item) => (
        <ProductCardList
          title={item.name}
          subTitle={item.color}
          imageUrl={`${IMAGE_BASE_URL}${item.image.substring(1)}`}
          price={item.price}
          onPressProduct={() => onPressProduct(item)}
          onPressDelete={() => onPressDelete(item.id)}
          style={styles.productCard}
          key={item.id}
        />
      ))}
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  productCard: {
    marginVertical: spacing.sm,
  },
});
