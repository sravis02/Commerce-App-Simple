import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import ScreenView from "../../../components/ScreenView/ScreenView";
import globalStyles from "../../../constants/globalStyles";
import {
  TextScreenHeader,
  TextScreenSubTitle,
  TextButtonTitle,
} from "../../../components/Texts/Texts";
import ProductHeader from "../components/ProductHeader";
import { IMAGE_BASE_URL } from "../../../constants/backend";
import IconButton from "../../../components/IconButton/IconButton";
import { spacing } from "../../../constants/stylingValues";
import Markdown from "react-native-simple-markdown";

export default function ProductDescription({ content }) {
  return (
    <View>
      <TextButtonTitle style={styles.descriptionTitle}>
        Description
      </TextButtonTitle>
      <View style={styles.markdownContainer}>
        <Markdown styles={markdownStyles}>{content}</Markdown>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionTitle: {
    color: colors.black,
    marginBottom: spacing.xs,
  },
  markdownContainer: {
    backgroundColor: colors.grey0,
    borderRadius: 2.5,
    padding: spacing.sm,
  },
});

const markdownStyles = {
  heading1: {
    fontSize: 14,
    color: "purple",
  },
  link: {
    color: colors.primary,
  },
  text: {
    color: colors.black,
  },
};
