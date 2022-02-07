import { ScrollView, View } from "react-native";
import {
  SPACING_HORIZONTAL,
  STATUS_BAR_HEIGHT,
  ADDITIONAL_TOP_SPACE,
  SCREEN_BOTTOM_SPACE,
} from "../../constants/stylingValues";

export default function ScreenView({
  children,
  style,
  paddingHorizontal = SPACING_HORIZONTAL,
  safeView = true,
  additionalTopSpace = ADDITIONAL_TOP_SPACE,
  scrollView = false,
}) {
  const paddingTop = safeView ? STATUS_BAR_HEIGHT + additionalTopSpace : 0;

  if (scrollView) {
    return (
      <ScrollView style={[{ paddingTop, paddingHorizontal }, style]}>
        {children}
      </ScrollView>
    );
  } else {
    return (
      <View style={[{ paddingTop, paddingHorizontal }, style]}>{children}</View>
    );
  }
}
