import "react-native-gesture-handler";
// import { enableLatestRenderer } from "react-native-maps";
// enableLatestRenderer();
import { View, Text, LogBox, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import RootNavigator from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";


LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <GestureHandlerRootView
    style={{flex:1}}
    >
              {/* <BottomSheetModalProvider> */}
              <RootNavigator/>


              {/* </BottomSheetModalProvider> */}


      
    </GestureHandlerRootView>
   
  );
};

export default App;
