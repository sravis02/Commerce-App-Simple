import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoverScreen from "./DiscoverScreen";
import ProductScreen from "../../product/screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function DiscoverNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Discover-Main" component={DiscoverScreen} />
      <Stack.Screen name="Discover-Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
