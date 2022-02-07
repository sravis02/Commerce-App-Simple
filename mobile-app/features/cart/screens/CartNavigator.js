import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./CartScreen";
import ProductScreen from "../../product/screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart-Main" component={CartScreen} />
      <Stack.Screen name="Cart-Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
