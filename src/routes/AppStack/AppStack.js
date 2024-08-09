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
import CustomerConversation from "../../screens/main/Customer/CustomerConversation";
import CustomerChat from "../../screens/main/Customer/CustomerChat";
import NotificationSettings from "../../screens/main/Customer/NotificationSettings";
import CustomerFilter from "../../screens/main/Customer/CustomerFilter";
import CustomerProfile from "../../screens/main/Customer/CustomerProfile";
import DedicatedService from "../../screens/main/Customer/DedicatedService/DedicatedService";
import ManageOrders from "../../screens/main/Customer/ManageOrders";
import ResolutionCenter from "../../screens/main/Customer/ResolutionCenter";
import SupportTeamLiveChat from "../../screens/main/Customer/SupportTeamLiveChat";
import DriverFilter from "../../screens/main/Driver/DriverFilter";
import DriverConversation from "../../screens/main/Driver/DriverConversation";
import DriverChat from "../../screens/main/Driver/DriverChat";
import DriverNotificationSettings from "../../screens/main/Driver/DriverNotificationSettings";
// import DriverProfile from "../../screens/main/Driver/DriverProfile";
import ServiceProfile from "../../screens/main/Driver/ServiceProfile";

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

      <Stack.Screen name={"CustomerSignup"} component={CustomerSignup} />
      <Stack.Screen name={"DriverSignup"} component={DriverSignup} />
      <Stack.Screen name={"ServiceProfile"} component={ServiceProfile} />


      <Stack.Screen
        name={"CustomerConversation"}
        component={CustomerConversation}
      />
      <Stack.Screen name={"CustomerChat"} component={CustomerChat} />
      <Stack.Screen name={"CustomerTab"} component={CustomerBottomTabs} />
      <Stack.Screen
        name={"DriverHomeBottomTab"}
        component={DriverHomeBottomTab}
      />
      <Stack.Screen
        name={"NotificationSettings"}
        component={NotificationSettings}
      />
      <Stack.Screen name={"CustomerFilter"} component={CustomerFilter} />
      <Stack.Screen name={"DriverFilter"} component={DriverFilter} />

      <Stack.Screen name={"DriverSearch"} component={DriverSearch} />
      <Stack.Screen
        name={"DriverConversation"}
        component={DriverConversation}
      />

      <Stack.Screen name={"DriverService"} component={DriverService} />
      <Stack.Screen name={"MoveCategoryOne"} component={MoveCategoryOne} />
      <Stack.Screen name={"MoveCategoryTwo"} component={MoveCategoryTwo} />
      <Stack.Screen name={"SetPrice"} component={SetPrice} />
      <Stack.Screen name={"Addons"} component={Addons} />
      <Stack.Screen name={"ResolutionCenter"} component={ResolutionCenter} />
      <Stack.Screen
        name={"SupportTeamLiveChat"}
        component={SupportTeamLiveChat}
      />

      <Stack.Screen name={"DriverChat"} component={DriverChat} />
      {/* <Stack.Screen name={"DriverProfile"} component={DriverProfile} /> */}

      <Stack.Screen
        name={"DriverNotificationSettings"}
        component={DriverNotificationSettings}
      />

      <Stack.Screen name={"TrackOrder"} component={TrackOrder} />
      <Stack.Screen name={"CustomerProfile"} component={CustomerProfile} />
      <Stack.Screen name={"ManageOrders"} component={ManageOrders} />

      <Stack.Screen name={"DedicatedService"} component={DedicatedService} />

      <Stack.Screen name={"CustomerSearch"} component={CustomerSearch} />
      <Stack.Screen name={"DeliveryManager"} component={DeliveryManager} />
      <Stack.Screen
        name={"CustomerDriverSetting"}
        component={CustomerDriverSetting}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
