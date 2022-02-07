import { StatusBar } from "expo-status-bar";
import Navigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useGetNewCartQuery } from "./redux/apis/productsApi";
import { useEffect, useState } from "react";
import { setCartId } from "./redux/slices/cartSlice";
import AppLoading from "expo-app-loading";
import useCartId from "./utils/hooks/use-cart-id";
import { StripeProvider } from "@stripe/stripe-react-native";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { useGetStripePublicKeyQuery } from "./redux/apis/productsApi";

export default function AppContent() {
  useCartId();
  const { data: responseData, isSuccess: gotStripePublicKey } =
    useGetStripePublicKeyQuery();

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded || !gotStripePublicKey) {
    return <AppLoading />;
  } else {
    return (
      <StripeProvider publishableKey={responseData.publishable_key}>
        <Navigation />
        <StatusBar style="auto" />
      </StripeProvider>
    );
  }
}
