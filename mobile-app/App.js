import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AppContent from "./AppContent";

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
