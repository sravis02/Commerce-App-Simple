import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";
import SearchNavigator from "./features/search/screens/SearchNavigator";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import DiscoverNavigator from "./features/discover/screens/DiscoverNavigator";
import CartNavigator from "./features/cart/screens/CartNavigator";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const cartBadge = useSelector((state) => state.cart.badge);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarBadgeStyle: { backgroundColor: colors.primary, color: "white" },
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.subTitleGrey,

          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Discover") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            }

            return <Ionicons name={iconName} color={color} size={27} />;
          },
        })}
      >
        <Tab.Screen name="Discover" component={DiscoverNavigator} />
        <Tab.Screen name="Search" component={SearchNavigator} />
        <Tab.Screen
          name="Cart"
          component={CartNavigator}
          options={{ tabBarBadge: cartBadge }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
