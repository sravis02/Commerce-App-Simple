import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import ScreenView from "../../../components/ScreenView/ScreenView";
import globalStyles from "../../../constants/globalStyles";
import {
  TextScreenHeader,
  TextScreenSubTitle,
} from "../../../components/Texts/Texts";
import { spacing, SPACING_HORIZONTAL } from "../../../constants/stylingValues";

export default function ProductHeader({
  title,
  subTitle = "",
  onPressBackIcon,
}) {
  return (
    <ScreenView style={styles.wrapper}>
      <AntDesign
        name="left"
        size={24}
        color="black"
        onPress={onPressBackIcon}
        style={styles.backIcon}
      />
      <View style={styles.titleContainer}>
        <TextScreenHeader numberOfLines={1}>{title}</TextScreenHeader>
        {!!subTitle && subTitle.length > 0 && (
          <TextScreenSubTitle numberOfLines={1}>{subTitle}</TextScreenSubTitle>
        )}
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING_HORIZONTAL,
    paddingBottom: spacing.sm,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.grey1,
  },
  backIcon: {
    padding: spacing.sm,
    marginRight: spacing.sm,
  },
  titleContainer: {
    flex: 1,
  },
});
