import { StyleSheet, Text, View, Image } from "react-native";
import globalStyles from "../../../constants/globalStyles";
import ScreenView from "../../../components/ScreenView/ScreenView";
import { dateToFormattedString } from "../../../utils/formatting";
import { useMemo } from "react";
import {
  TextScreenHeader,
  TextScreenSubTitle,
} from "../../../components/Texts/Texts";
import { spacing, SPACING_HORIZONTAL } from "../../../constants/stylingValues";
import ProductCardSmall from "../../../components/ProductCard/ProductCardSmall";
import Placeholder from "../../../components/Placeholder/Placeholder";
import ProductCarousel from "../../../components/ProductCarousel/ProductCarousel";
import { useGetBestsellersQuery } from "../../../redux/apis/productsApi";

export default function DiscoverScreen() {
  const { data, error, isLoading, isSuccess } = useGetBestsellersQuery();
  let subTitleText = useMemo(() => dateToFormattedString(), []);

  return (
    <ScreenView
      style={globalStyles.screen}
      paddingHorizontal={0}
      scrollView
      screenBottomSpace={true}
    >
      <ScreenView style={styles.headerContainer} safeView={false}>
        <TextScreenHeader>Discover</TextScreenHeader>
        <TextScreenSubTitle>{subTitleText}</TextScreenSubTitle>
      </ScreenView>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/5319372/pexels-photo-5319372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
        style={globalStyles.discoverImage}
      />
      {isSuccess && (
        <ProductCarousel
          productsData={data}
          title="Bestseller"
          containerStyle={styles.bestsellerContainer}
          spacingLeft={SPACING_HORIZONTAL}
          productScreenName="Discover-Product"
        />
      )}

      <Image
        source={{
          uri: "https://images.pexels.com/photos/5625042/pexels-photo-5625042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
        style={globalStyles.discoverImage}
      />

      <Placeholder />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: spacing.md,
  },
  bestsellerContainer: {
    paddingVertical: spacing.md,
  },
});
