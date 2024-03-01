import "react-native-gesture-handler";
// import { enableLatestRenderer } from "react-native-maps";
// enableLatestRenderer();
import { View, Text, LogBox, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import RootNavigator from "./src/routes";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <View>
      <Text>kcndknc</Text>
    </View>
   
  );
};

export default App;
