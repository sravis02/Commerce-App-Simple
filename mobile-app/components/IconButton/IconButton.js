import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { SCREEN_BOTTOM_SPACE, spacing } from "../../constants/stylingValues";
import { TextButtonTitle } from "../Texts/Texts";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default class IconButton extends React.Component {
  render() {
    const backgroundColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : colors.primary;
    const borderColor = this.props.borderColor
      ? this.props.borderColor
      : colors.primary;
    const borderWidth = this.props.borderColor ? 1 : 0;
    const textColor = this.props.textColor
      ? this.props.textColor
      : colors.white;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.wrapper,
          {
            backgroundColor,
            borderColor,
            borderWidth,
          },
          this.props.containerStyle,
        ]}
      >
        {this.props.iconComponent &&
          React.cloneElement(this.props.iconComponent, { style: styles.icon })}
        <View style={styles.titleContainer}>
          <TextButtonTitle style={[styles.title, { color: textColor }]}>
            {this.props.title}
          </TextButtonTitle>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: spacing.sm,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: spacing.xs,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
});
