import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import ScreenView from "../../../components/ScreenView/ScreenView";
import globalStyles from "../../../constants/globalStyles";
import {
  TextScreenHeader,
  TextScreenSubTitle,
  TextButtonTitle,
  TextProductPriceBig,
} from "../../../components/Texts/Texts";
import ProductHeader from "../components/ProductHeader";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import IconButton from "../../../components/IconButton/IconButton";
import { SCREEN_BOTTOM_SPACE, spacing } from "../../../constants/stylingValues";
import ProductDescription from "../components/ProductDescription";
import Placeholder from "../../../components/Placeholder/Placeholder";
import { useAddToCartMutation } from "../../../redux/apis/productsApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementBadge } from "../../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import PriceContainer from "../components/PriceContainer";

export default function ProductScreen({ route, navigation }) {
  const cartBadge = useSelector((state) => state.cart.badge);
  const cartId = useSelector((state) => state.cart.cartId);
  const dispatch = useDispatch();
  const [addToCart, atcResult] = useAddToCartMutation();

  const { id, name, description, image, color, price, stock, is_bestseller } =
    route.params;

  const onPressAtc = () => {
    let productIds = [{ id }];
    addToCart({ cartId, productIds });
  };
  const onPressWishlist = () => {};

  useEffect(() => {
    if (atcResult.isSuccess) {
      dispatch(incrementBadge());
    }
  }, [atcResult]);

  return (
    <>
      <ProductHeader
        title={name}
        subTitle={color}
        onPressBackIcon={() => navigation.goBack()}
      />
      <ScrollView style={globalStyles.screen}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${image.substring(1)}` }}
          style={styles.productImage}
        />

        <ScreenView safeView={false}>
          <PriceContainer
            price={price}
            containerStyle={styles.priceContainer}
          />
          <IconButton
            iconComponent={
              <Ionicons name="cart-outline" color={colors.white} size={27} />
            }
            title="Add To Cart"
            containerStyle={styles.atcButton}
            onPress={onPressAtc}
          />
          <IconButton
            iconComponent={
              <Ionicons name="heart-outline" color={colors.primary} size={27} />
            }
            title="Wishlist"
            borderColor={colors.grey1}
            backgroundColor={colors.white}
            textColor={colors.primary}
            containerStyle={styles.wishlistButton}
            onPress={onPressWishlist}
          />

          <ProductDescription content={description} />
        </ScreenView>
        <Text>{cartBadge}</Text>
        <Placeholder size={SCREEN_BOTTOM_SPACE} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  searchContent: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  productImage: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: spacing.xl,
  },
  atcButton: {
    marginBottom: spacing.xs,
  },
  wishlistButton: {
    marginBottom: spacing.xl,
  },
  priceContainer: {
    marginBottom: spacing.xl,
  },
});
