import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCardMedium from "../../../components/ProductCard/ProductCardMedium";
import ScreenView from "../../../components/ScreenView/ScreenView";
import SearchBox from "../../../components/SearchBox/SearchBox";
import { TextScreenSubTitle } from "../../../components/Texts/Texts";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import colors from "../../../constants/colors";
import globalStyles from "../../../constants/globalStyles";
import { spacing, SPACING_HORIZONTAL } from "../../../constants/stylingValues";
import { useNavigation } from "@react-navigation/native";

export default function SearchContent({ style, data }) {
  const navigaton = useNavigation();

  const onPressProduct = (item) => {
    console.log(`pressed product ${item.id}`);
    navigaton.navigate("Search-Product", item);
  };

  return (
    <FlatList
      renderItem={({ item }) => (
        <ProductCardMedium
          imageUrl={`${IMAGE_BASE_URL}${item.image.substring(1)}`}
          title={item.name}
          onPress={() => onPressProduct(item)}
          style={styles.productCard}
          price={item.price}
        />
      )}
      data={data}
      numColumns={2}
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: "space-between",
        alignSelf: "center",
      }}
      ListEmptyComponent={
        <TextScreenSubTitle>Nothing found..</TextScreenSubTitle>
      }
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  productCard: {
    marginHorizontal: 20,
    marginBottom: spacing.sm,
  },
});
