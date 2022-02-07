import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const TextScreenHeader = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.screenHeader, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextScreenSubTitle = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.screenSubTitle, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextProductTitle = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.productTitle, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextBoxText = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.textBoxText, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextProductPrice = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.productPrice, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextProductPriceBig = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.productPriceBig, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextButtonTitle = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.buttonTitle, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextSubTitleSmall = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.subTitleSmall, style]} {...props}>
      {children}
    </Text>
  );
};

export const TextTitleSmall = ({ style, children, ...props }) => {
  return (
    <Text style={[textStyles.titleSmall, style]} {...props}>
      {children}
    </Text>
  );
};

export const textStyles = StyleSheet.create({
  screenHeader: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    color: colors.black,
  },
  screenSubTitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: colors.subTitleGrey,
  },
  productTitle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: colors.black,
  },
  textBoxText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: colors.greyTextBox,
  },
  productPrice: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: colors.subTitleGrey,
  },
  productPriceBig: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    color: colors.subTitleGrey,
  },
  buttonTitle: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    color: colors.white,
  },
  subTitleSmall: {
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    color: colors.black,
  },
  titleSmall: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: colors.black,
  },
});

// Roboto_100Thin,
// Roboto_300Light,
// Roboto_400Regular,
// Roboto_500Medium,
// Roboto_700Bold,
// Roboto_900Black,
