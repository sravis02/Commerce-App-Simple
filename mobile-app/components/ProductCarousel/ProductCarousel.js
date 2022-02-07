import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet } from "react-native";
import { IMAGE_BASE_URL } from "../../constants/backend";
import {
  SPACING_HORIZONTAL,
  STATUS_BAR_HEIGHT,
  ADDITIONAL_TOP_SPACE,
  SCREEN_BOTTOM_SPACE,
  spacing,
} from "../../constants/stylingValues";
import Placeholder from "../Placeholder/Placeholder";
import ProductCardSmall from "../ProductCard/ProductCardSmall";
import { TextScreenHeader } from "../Texts/Texts";

export default function ProductCarousel({
  title = "Carousel Title",
  productsData = [],
  containerStyle,
  spacingLeft = 0,
  productScreenName,
}) {
  const navigation = useNavigation();

  const onPressProduct = (item) => {
    console.log(`Product pressed with id ${item.id}`);
    navigation.navigate(productScreenName, item);
  };

  return (
    <View style={containerStyle}>
      <TextScreenHeader style={(styles.title, { marginLeft: spacingLeft })}>
        {title}
      </TextScreenHeader>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCardSmall
            imageUrl={`${IMAGE_BASE_URL}${item.image.substring(1)}`}
            title={item.name}
            onPress={() => onPressProduct(item)}
            style={styles.productCard}
          />
        )}
        data={productsData}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <Placeholder
            isHorizontal={false}
            size={spacingLeft}
            secondarySize={1}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: spacing.sm,
  },
  productCard: {
    marginRight: spacing.sm,
  },
});
