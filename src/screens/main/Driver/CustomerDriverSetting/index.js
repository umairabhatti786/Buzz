import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import { Inter } from "../../../../utils/Fonts";
import CustomInput from "../../../../components/CustomInput";
import { Spacer } from "../../../../components/Spacer";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import DropDown from "../../../../components/DropDown";
import { icon } from "../../../../assets/png/icons";
import CustomerTicket from "../../../../components/CustomerTicket";
import { image } from "../../../../assets/png/images";
import DriverCard from "../../../../components/DriverCard";
import SettingContainer from "./SettingContainer";
import ProfileCard from "../../../../components/ProfileCard";

const CustomerDriverSetting = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState([
    { user: "Customer", img: image.defimg700, isActive: true, buttonWidth: 70 },
    {
      user: "Driver",
      img: image.defimg600,
      isActive: false,
      isRating: true,
      buttonWidth: 55,
    },
  ]);
  const data = [
    {
      id: 1,
      label: "task1",
      value: "Andrede",
    },
    {
      id: 2,
      label: "task2",
      value: "Herr",
    },
  ];

  const customerTicketData = [
    {
      img: image.defimg102,
      name: "Customer Name",
      active: "Available",
      date: "02/26/23",
      distance: "15 mil",
      time: "15 Min Away",
      isOpen: true,
      pass: icon.pass,
    },
    {
      img: image.defimg103,
      name: "Customer Name",
      active: "Busy",
      date: "02/26/23",
      distance: "15 mil",
      time: "15 Min Away",
      isOpen: false,
      pass: icon.passg,
    },
    {
      img: image.defimg700,
      name: "Customer Name",
      active: "On Schedule",
      date: "02/26/23",
      distance: "15 mil",
      time: "15 Min Away",
      isOpen: true,
      pass: icon.passp,
    },
  ];

  const AccountData = [
    { title: "Legal Name", text: "John Blazer" },
    { title: "Phone", text: "+1 (827) 1233-1837" },
    { title: "Email", text: "Johnblazer1736@gmail.com" },
  ];
  const SecurityData = [
    { title: "Password", text: "Click to change" },
    { title: "MFA", text: "Activated" },
    { title: "Notification", text: "Click to check settings" },
  ];
  const PaymentData = [
    { title: "Methods", text: "Click to check settings" },
    { title: "Transaction History", text: "Check" },
    { title: "Withdraw", text: "Check" },
  ];
  const LearnData = [
    { title: "News" },
    { title: "Documentations" },
    { title: "Promotions" },
    // { title: "Vouchers/Rewards",},
  ];
  const MoreData = [
    { title: "Be a Partner" },
    { title: "Privacy Policy" },
    { title: "Terms & Conditions" },
  ];

  return (
    <Screen
      height={40}
      backgroundColor={colors.white}
      // topBarColor={colors.primary}
      barStyle={"dark-content"}
    >
      <View
        style={{
          flex: 1,

          backgroundColor: colors.white,
        }}
      >
        <View
          style={{
            ...AppStyles.justifyRow,
            backgroundColor: colors.white,
            paddingVertical: verticalScale(5),
            paddingHorizontal: scale(15),
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: scale(15), height: scale(15) }}
              resizeMode="contain"
              source={icon.back}
            />
            <Spacer width={scale(10)} />
            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{ textAlign: "center" }}
              text={"Your Profile"}
            />
          </TouchableOpacity>

          <Image
            style={{
              width: scale(70),
              height: scale(60),
            }}
            source={image.fqa}
            resizeMode="contain"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: scale(15),
            }}
          >
            <View>
              {userProfile?.map((item, index) => {
                return (
                  <View>
                    <ProfileCard
                      user={item.user}
                      img={item.img}
                      isRating={item.isRating}
                      isActive={item.isActive}
                      buttonWidth={item.buttonWidth}
                      setIsActive={() => {
                        let profileArray = [];
                        let data = [...userProfile];
                        profileArray = data.map((i) => {
                          if (i.user == item.user) {
                            i.isActive = true;
                          } else {
                            i.isActive = false;
                          }

                          return { ...i };
                        });
                        // data[index].isActive=!item.isActive
                        // data[index].isActive=!item.isActive

                        // console.log("UserProfile",data)
                        // let indexOfElement = userProfile.indexOf(item.user);
                        // console.log("indexOfElement",indexOfElement)
                        profileArray.sort((a, b) =>
                          a.isActive === b.isActive ? 0 : a.isActive ? -1 : 1
                        );

                        setUserProfile(profileArray);
                      }}
                    />
                    <Spacer height={verticalScale(10)} />
                    {/* <ProfileCard
                                user={"Driver"}
                                img={image.defimg600}
                                isRating={true}


                /> */}
                  </View>
                );
              })}

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  let reversedArray = [...userProfile].reverse();
                  setUserProfile(reversedArray);
                }}
                style={{
                  position: "absolute",
                  top: "43%",
                  width: scale(35),
                  height: scale(35),
                  right: "45%",
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={image.updown}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...AppStyles.row,
                alignSelf: "flex-end",
                paddingVertical: verticalScale(15),
              }}
            >
              <CustomText
                color={colors.secondary}
                size={13}
                text={"Add Account"}
              />
              <Spacer width={scale(10)} />
              <Image
                style={{ width: scale(16), height: scale(16) }}
                source={icon.add}
              />
            </View>

            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{
                marginTop: verticalScale(10),
                marginBottom: verticalScale(15),
              }}
              text={"Account"}
            />
            <View style={styles.box}>
              <View style={{ paddingTop: verticalScale(15) }}>
                {AccountData.map((item, index) => {
                  return (
                    <SettingContainer
                      text={item.title}
                      data={AccountData}
                      index={index}
                      text1={item.text}
                    />
                  );
                })}
              </View>
            </View>

            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{
                marginTop: verticalScale(20),
                marginBottom: verticalScale(15),
              }}
              text={"Security"}
            />
            <View style={styles.box}>
              <View style={{ paddingTop: verticalScale(15) }}>
                {SecurityData.map((item, index) => {
                  return (
                    <SettingContainer
                      text={item.title}
                      data={AccountData}
                      index={index}
                      text1={item.text}
                    />
                  );
                })}
              </View>
            </View>

            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{
                marginTop: verticalScale(20),
                marginBottom: verticalScale(15),
              }}
              text={"Payment"}
            />
            <View style={styles.box}>
              <View style={{ paddingTop: verticalScale(15) }}>
                {PaymentData.map((item, index) => {
                  return (
                    <SettingContainer
                      text={item.title}
                      data={AccountData}
                      index={index}
                      text1={item.text}
                    />
                  );
                })}
              </View>
            </View>

            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{
                marginTop: verticalScale(20),
                marginBottom: verticalScale(15),
              }}
              text={"Learn"}
            />
            <View style={styles.box}>
              <View style={{ paddingTop: verticalScale(15) }}>
                {LearnData.map((item, index) => {
                  return (
                    <SettingContainer
                      text={item.title}
                      data={AccountData}
                      index={index}
                      text1={item.text}
                    />
                  );
                })}
              </View>
            </View>
            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{
                marginTop: verticalScale(20),
                marginBottom: verticalScale(15),
              }}
              text={"More"}
            />
            <View style={styles.box}>
              <View style={{ paddingTop: verticalScale(15) }}>
                {MoreData.map((item, index) => {
                  return (
                    <SettingContainer
                      text={item.title}
                      data={AccountData}
                      index={index}
                      text1={item.text}
                    />
                  );
                })}
              </View>
            </View>

            <TouchableOpacity
              style={{
                ...AppStyles.row,
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(5),
                width: scale(100),
                alignSelf: "flex-end",
                borderWidth: 1,
                borderColor: "#FF0000",
                borderRadius: scale(8),
                marginTop: verticalScale(10),
                marginRight: scale(5),
                marginBottom: verticalScale(20),
              }}
            >
              <CustomText
                //   fontWeight="700"
                color={"#FF0000"}
                //   fontFam={Inter.bold}
                size={13}
                style={{
                  marginRight: scale(15),
                }}
                text={"Log Out"}
              />

              <Image
                style={{
                  width: scale(18),
                  height: scale(18),
                  alignSelf: "flex-end",
                }}
                source={image.logout}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default CustomerDriverSetting;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: scale(15),
    // paddingBottom:verticalScale(10)
  },
});
