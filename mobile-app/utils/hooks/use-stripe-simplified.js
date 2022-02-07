import { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { BACKEND_BASE_URL } from "../../constants/backend";
import { Alert } from "react-native";
import { useGetStripePaymentSheetQuery } from "../../redux/apis/productsApi";
import { useNavigation } from "@react-navigation/native";

export default function useStripeSimplified(cartId) {
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isCheckoutReady, setIsCheckoutReady] = useState(false);

  // Gets invalidated by atc/remove from cart (automatic refetching on cartproducts change)
  const { data: paymentSheetData = null, isSuccess } =
    useGetStripePaymentSheetQuery(cartId);

  const initializePaymentSheet = async ({
    paymentIntent,
    ephemeralKey,
    customer,
  }) => {
    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: "Merchant Name",
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      setIsCheckoutReady(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      navigation.navigate("Discover");
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    if (!!paymentSheetData) {
      initializePaymentSheet(paymentSheetData);
    }
  }, [paymentSheetData]);

  return {
    openPaymentSheet,
    isCheckoutReady,
  };
}
