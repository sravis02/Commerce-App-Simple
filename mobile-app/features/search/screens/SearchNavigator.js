import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./SearchScreen";
import ProductScreen from "../../product/screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search-Main" component={SearchScreen} />
      <Stack.Screen name="Search-Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
