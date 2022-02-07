import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../../constants/colors";
import { TextBoxText } from "../Texts/Texts";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBox({ onSubmitEditing }) {
  return (
    <View style={styles.wrapper}>
      <Ionicons
        name="search"
        color={colors.greyTextBox}
        size={15}
        style={styles.iconStyle}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.greyTextBox}
        style={styles.textInput}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderColor: colors.grey1,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  iconStyle: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
  },
});
