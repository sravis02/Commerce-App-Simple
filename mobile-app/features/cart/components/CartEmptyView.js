import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../../constants/globalStyles";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetBadge } from "../../../redux/slices/cartSlice";
import { useRemoveFromCartMutation } from "../../../redux/apis/productsApi";
import ScreenView from "../../../components/ScreenView/ScreenView";
import {
  TextButtonTitle,
  TextScreenHeader,
  TextScreenSubTitle,
} from "../../../components/Texts/Texts";
import { spacing } from "../../../constants/stylingValues";
import ProductCardList from "../../../components/ProductCard/ProductCartList";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function CartEmptyView({ containerStyle, data }) {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={styles.main}>
        <Ionicons name="sad-outline" size={50} color={colors.grey1} />
        <TextButtonTitle style={styles.mainText}>
          Your Cart Is Empty
        </TextButtonTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.grey0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    alignItems: "center",
  },
  mainText: {
    color: colors.grey1,
  },
});
