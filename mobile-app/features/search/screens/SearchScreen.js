import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenView from "../../../components/ScreenView/ScreenView";
import SearchBox from "../../../components/SearchBox/SearchBox";
import colors from "../../../constants/colors";
import globalStyles from "../../../constants/globalStyles";
import SearchContent from "../components/SearchContent";
import SearchHeader from "../components/SearchHeader";
import { useGetProductsByKeywordQuery } from "../../../redux/apis/productsApi";
import SearchContentPlaceholder from "../components/SearchContentPlaceholder";

export default function SearchScreen() {
  const [searchKw, setSearchKw] = useState("");
  const { data, isSuccess, isLoading } = useGetProductsByKeywordQuery(searchKw);

  const onSearchBoxChange = ({ nativeEvent: { text } }) => {
    console.log(text);
    setSearchKw(text);
  };

  return (
    <ScreenView
      safeView={false}
      paddingHorizontal={0}
      style={globalStyles.screen}
    >
      <SearchHeader onSubmitEditing={onSearchBoxChange} />
      {!isSuccess && <SearchContentPlaceholder />}
      {isSuccess && <SearchContent style={styles.searchContent} data={data} />}
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  searchContent: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
