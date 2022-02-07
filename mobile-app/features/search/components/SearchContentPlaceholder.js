import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCardMedium from "../../../components/ProductCard/ProductCardMedium";
import ScreenView from "../../../components/ScreenView/ScreenView";
import SearchBox from "../../../components/SearchBox/SearchBox";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import colors from "../../../constants/colors";
import globalStyles from "../../../constants/globalStyles";
import { spacing, SPACING_HORIZONTAL } from "../../../constants/stylingValues";
import SkeletonContent from "react-native-skeleton-content";
// import { EasingNode } from "react-native-reanimated";

export default function SearchContentPlaceholder() {
  return (
    <SkeletonContent
      containerStyle={{ flex: 1 }}
      isLoading={true}
      layout={[
        {
          key: "Row-1",
          width: "100%",
          justifyContent: "space-evenly",
          flexDirection: "row",
          children: [
            {
              key: "col-1",
              marginBottom: spacing.sm,
              width: 150,
              alignItems: "flex-end",
              children: [
                { width: 150, height: 150, marginBottom: spacing.sm, key: "1" },
                { width: 150, height: 20, marginBottom: spacing.xs, key: "2" },
                { width: 50, height: 20, key: "3" },
              ],
            },
            {
              key: "col-2",
              marginBottom: spacing.sm,
              width: 150,
              alignItems: "flex-end",
              children: [
                { width: 150, height: 150, marginBottom: spacing.sm, key: "1" },
                { width: 150, height: 20, marginBottom: spacing.xs, key: "2" },
                { width: 50, height: 20, key: "3" },
              ],
            },
          ],
        },
        {
          key: "Row-2",
          width: "100%",
          justifyContent: "space-evenly",
          flexDirection: "row",
          children: [
            {
              key: "col-1",
              marginBottom: spacing.sm,
              width: 150,
              alignItems: "flex-end",
              children: [
                { width: 150, height: 150, marginBottom: spacing.sm, key: "1" },
                { width: 150, height: 20, marginBottom: spacing.xs, key: "2" },
                { width: 50, height: 20, key: "3" },
              ],
            },
            {
              key: "col-2",
              marginBottom: spacing.sm,
              width: 150,
              alignItems: "flex-end",
              children: [
                { width: 150, height: 150, marginBottom: spacing.sm, key: "1" },
                { width: 150, height: 20, marginBottom: spacing.xs, key: "2" },
                { width: 50, height: 20, key: "3" },
              ],
            },
          ],
        },
        {
          key: "Row-3",
          width: "100%",
          justifyContent: "space-evenly",
          flexDirection: "row",
          children: [
            {
              key: "col-1",
              marginBottom: spacing.sm,
              width: 150,
              alignItems: "flex-end",
              children: [
                { width: 150, height: 150, marginBottom: spacing.sm, key: "1" },
                { width: 150, height: 20, marginBottom: spacing.xs, key: "2" },
                { width: 50, height: 20, key: "3" },
              ],
            },
            {
              key: "col-2",
              marginBottom: spacing.sm,
              width: 150,
              alignItems: "flex-end",
              children: [
                { width: 150, height: 150, marginBottom: spacing.sm, key: "1" },
                { width: 150, height: 20, marginBottom: spacing.xs, key: "2" },
                { width: 50, height: 20, key: "3" },
              ],
            },
          ],
        },
      ]}
    />
  );
}
