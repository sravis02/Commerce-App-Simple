import { StyleSheet, Text, View } from "react-native";
import ScreenView from "../../../components/ScreenView/ScreenView";
import SearchBox from "../../../components/SearchBox/SearchBox";
import colors from "../../../constants/colors";
import globalStyles from "../../../constants/globalStyles";
import { spacing } from "../../../constants/stylingValues";

export default function SearchHeader({ style, onSubmitEditing }) {
  return (
    <ScreenView safeView={true} style={[styles.wrapper, style]}>
      <SearchBox onSubmitEditing={onSubmitEditing} />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    paddingBottom: spacing.md,
  },
});
