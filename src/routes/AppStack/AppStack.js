import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomerBottomTabs from "../CustomerBottomTabs/Tabs";
import DriverSearch from "../../screens/main/Customer/DriverSearch";
import TrackOrder from "../../screens/main/TrackOrder";
import DriverHomeBottomTab from "../DriverHomeBottomTab";
import CustomerSearch from "../../screens/main/Driver/CustomerSearch";
import DeliveryManager from "../../screens/main/Driver/DeliveryManager";
import CustomerDriverSetting from "../../screens/main/Driver/CustomerDriverSetting";
import CustomerSignup from "../../screens/auth/CustomerSignup";
import DriverSignup from "../../screens/auth/DriverSignup";
import DriverService from "../../screens/main/Driver/DriverService";
import MoveCategoryOne from "../../screens/main/Driver/MoveCategoryOne";
import MoveCategoryTwo from "../../screens/main/Driver/MoveCategoryTwo";
import SetPrice from "../../screens/main/Driver/SetPrice";
import Addons from "../../screens/main/Driver/Addons";

const AppStack = () => {
  const Stack = createStackNavigator();
//   const [splashState,setSplashState]=useState(true)

//   useEffect(() => {
//     let timeState = setTimeout(() => {
//       // navigation.push('Onboarding01')
//       setSplashState(false);
//     }, 2000);
//     return () => {
//       clearTimeout(timeState);
//     };
//   }, []);
  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {splashState&&<Stack.Screen name={strings.splashScreen} component={SplashScreen} />} */}
      <Stack.Screen name={"DriverSignup"} component={DriverSignup} />

      {/* <Stack.Screen name={"CustomerSignup"} component={CustomerSignup} /> */}

      <Stack.Screen name={"CustomerTab"} component={CustomerBottomTabs} />
      <Stack.Screen name={"DriverHomeBottomTab"} component={DriverHomeBottomTab} />

      <Stack.Screen name={"DriverSearch"} component={DriverSearch} />
      <Stack.Screen name={"DriverService"} component={DriverService} />
      <Stack.Screen name={"MoveCategoryOne"} component={MoveCategoryOne} />
      <Stack.Screen name={"MoveCategoryTwo"} component={MoveCategoryTwo} />
      <Stack.Screen name={"SetPrice"} component={SetPrice} />
      <Stack.Screen name={"Addons"} component={Addons} />





      <Stack.Screen name={"TrackOrder"} component={TrackOrder} />
      <Stack.Screen name={"CustomerSearch"} component={CustomerSearch} />
      <Stack.Screen name={"DeliveryManager"} component={DeliveryManager} />
      <Stack.Screen name={"CustomerDriverSetting"} component={CustomerDriverSetting} />









      
      




      




    </Stack.Navigator>
  );
};
export default AppStack;
