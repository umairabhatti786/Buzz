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
import React, { useRef, useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Inter } from "../../../../utils/Fonts";
import { Spacer } from "../../../../components/Spacer";
import { icon } from "../../../../assets/png/icons";
import { image } from "../../../../assets/png/images";
import SettingContainer from "./SettingContainer";
import ProfileCard from "../../../../components/ProfileCard";
import NewText from "../../../../components/NewText";
import PhoneNumberModal from "./PhoneNumberModal";
import NumberVerificationModal from "./NumberVerificationModal";
import TermAndCondationModal from "./TermAndCondationModal";
import AddAccountModal from "./AddAccountModal";
import PaymentHistoryModal from "./PaymentHistoryModal";
import PaymentMethodModal from "../../Customer/DriverSearch/PaymentMethodModal";
import AddPaymentMethodModal from "../../Customer/DriverSearch/AddPaymentMethodModal";
import EmailVerificationBottomSheet from "./EmailVerificationBottomSheet";
import NewPasswordBottomSheet from "./NewPasswordBottomSheet";

const CustomerDriverSetting = ({ navigation }) => {
  const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false);
  const [isNumberVerification, setIsNumberVerification] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [isAddPaymentMethodVisible, steIsAddPaymentMethodVisible] =
    useState(false);
  const [isTermAndConditionVisible, setIsTermAndConditionVisible] =
    useState(false);
  const [isPaymentHistoryModal, setIsPaymentHistoryModal] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const emailVerificattionSheet = useRef(false);
  const newPasswordSheet = useRef(false);

  const [isAddAccountVisible, setIsAddAccountVisible] = useState(false);

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
  const ManageOrdersData = [
    {
      title: "Upcoming",
      text: "1",
      onPress: () =>
        navigation.navigate("ManageOrders", { aciveTab: "Upcoming" }),
    },
    {
      title: "Active",
      text: "1",
      onPress: () =>
        navigation.navigate("ManageOrders", { aciveTab: "Active" }),
    },
    {
      title: "Completed",
      text: "5",
      onPress: () =>
        navigation.navigate("ManageOrders", { aciveTab: "Completed" }),
    },
  ];

  const AccountData = [
    { title: "Legal Name", text: "John Blazer" },
    { title: "Phone", text: "+1 (827) 1233-1837" },
    { title: "Email", text: "Johnblazer1736@gmail.com" },
  ];
  const SecurityData = [
    {
      title: "Password",
      text: "Click to change",
      onPress: () => emailVerificattionSheet.current.present(),
    },
    { title: "MFA", text: "Activated" },
    {
      title: "Notification",
      text: "Click to check settings",
      onPress: () => navigation.navigate("NotificationSettings"),
    },
  ];
  const PaymentData = [
    {
      title: "Methods",
      text: "Click to check settings",
      onPress: () => setIsPaymentModal(true),
    },
    {
      title: "Transaction History",
      text: "Check",
      onPress: () => setIsPaymentHistoryModal(true),
    },
    {
      title: "Withdraw",
      text: "Check",
      onPress: () => setIsPaymentHistoryModal(true),
    },
  ];
  const LearnData = [
    { title: "News" },
    { title: "Documentations" },
    { title: "Promotions" },
    // { title: "Vouchers/Rewards",},
  ];
  const MoreData = [
    { title: "Be a Partner" },
    {
      title: "Privacy Policy",
      onPress: () => setIsTermAndConditionVisible(true),
    },
    {
      title: "Terms & Conditions",
      onPress: () => setIsTermAndConditionVisible(true),
    },
  ];

  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        // topBarColor={colors.white}
        barStyle={"dark-content"}
        statusBarColor={colors.white}
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
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{ textAlign: "center" }}
                text={"Your Profile"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("ResolutionCenter")}
            >
              <Image
                style={{
                  width: scale(70),
                  height: scale(60),
                }}
                source={image.fqa}
                resizeMode="contain"
              />
            </TouchableOpacity>
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

                          profileArray.sort((a, b) =>
                            a.isActive === b.isActive ? 0 : a.isActive ? -1 : 1
                          );

                          setUserProfile(profileArray);
                        }}
                      />
                      <Spacer height={verticalScale(10)} />
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

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsAddAccountVisible(true)}
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  paddingVertical: verticalScale(15),
                }}
              >
                <NewText
                  color={colors.secondary}
                  size={16}
                  text={"Add Account"}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{ width: scale(16), height: scale(16) }}
                  source={icon.add}
                />
              </TouchableOpacity>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(10),
                }}
                text={"Account"}
              />

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsPhoneNumberVisible(true)}
                style={{
                  flexDirection: "row",
                  // alignSelf: "flex-end",
                  alignItems: accountActive ? "center" : "flex-start",
                  marginVertical: 10,
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  backgroundColor: accountActive
                    ? "#00FF66" + "20"
                    : colors.red + "20",
                  borderRadius: 10,
                }}
              >
                {accountActive ? (
                  <TouchableOpacity style={styles.activeContainer}>
                    <Image
                      style={{ width: 18, height: 18 }}
                      resizeMode="contain"
                      source={icon.tick}
                    />
                  </TouchableOpacity>
                ) : (
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={image.alert}
                  />
                )}

                <View
                  style={{ gap: 5, marginHorizontal: 10, marginVertical: 5 }}
                >
                  {accountActive ? (
                    <NewText
                      color={colors.black}
                      size={14}
                      text={"Account Activated!"}
                    />
                  ) : (
                    <>
                      <NewText
                        color={colors.black}
                        size={13}
                        text={"Required Action (1)"}
                      />
                      <NewText
                        color={colors.red}
                        size={13}
                        text={"Click here to resolve"}
                      />
                    </>
                  )}
                </View>
              </TouchableOpacity>
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

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                text={"Manage Orders"}
              />
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {ManageOrdersData.map((item, index) => {
                    return (
                      <SettingContainer
                        text={item.title}
                        onPress={item.onPress}
                        fontWeight={"bold"}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
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
                        onPress={item.onPress}
                        text={item.title}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
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
                        onPress={item?.onPress}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
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
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
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
                        onPress={item.onPress}
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
                onPress={() => navigation.navigate("CustomerSignup")}
                style={{
                  ...AppStyles.row,
                  paddingHorizontal: scale(7),
                  paddingVertical: verticalScale(5),
                  // width: scale(100),
                  alignSelf: "flex-end",
                  borderWidth: 1.5,
                  borderColor: "#FF0000",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: scale(6),
                  marginTop: verticalScale(10),
                  marginBottom: verticalScale(20),
                  gap: 5,
                }}
              >
                <NewText
                  fontWeight="700"
                  color={"#FF0000"}
                  fontFam={Inter.bold}
                  size={14}
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

      <PhoneNumberModal
        modalVisible={isPhoneNumberVisible}
        setModalVisible={setIsPhoneNumberVisible}
        onSubmit={() => {
          setIsPhoneNumberVisible(false);
          setTimeout(() => {
            setIsNumberVerification(true);
          }, 500);
        }}
      />
      <NumberVerificationModal
        modalVisible={isNumberVerification}
        setModalVisible={setIsNumberVerification}
        onSubmit={() => {
          setIsNumberVerification(false);
          setAccountActive(true);
        }}
      />

      <AddAccountModal
        modalVisible={isAddAccountVisible}
        setModalVisible={setIsAddAccountVisible}
        onSubmit={() => {
          setIsPhoneNumberVisible(false);
          setTimeout(() => {
            setIsNumberVerification(true);
          }, 500);
        }}
      />
      <TermAndCondationModal
        modalVisible={isTermAndConditionVisible}
        setModalVisible={setIsTermAndConditionVisible}
      />
      <PaymentHistoryModal
        modalVisible={isPaymentHistoryModal}
        setModalVisible={setIsPaymentHistoryModal}
      />
      <PaymentMethodModal
        onPressCard={() => {
          setIsPaymentModal(false);
          setTimeout(() => {
            steIsAddPaymentMethodVisible(true);
          }, 1000);
        }}
        modalVisible={isPaymentModal}
        setModalVisible={setIsPaymentModal}
      />
      <AddPaymentMethodModal
        onPay={() => {
          steIsAddPaymentMethodVisible(false);
          setTimeout(() => {
            navigation.navigate("Home");
            // setIsThankyouModal(true);
          }, 500);
        }}
        modalVisible={isAddPaymentMethodVisible}
        setModalVisible={steIsAddPaymentMethodVisible}
      />

      <EmailVerificationBottomSheet
        bottomSheetModalRef={emailVerificattionSheet}
        onSubmit={() => {
          emailVerificattionSheet.current.dismiss();
          setTimeout(() => {
            newPasswordSheet.current.present();
          }, 500);
        }}
      />
      <NewPasswordBottomSheet
        bottomSheetModalRef={newPasswordSheet}
        onSubmit={() => {
          newPasswordSheet.current.dismiss();
          setTimeout(() => {
            navigation.navigate("Home");
          }, 500);
        }}
      />
    </>
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
  activeContainer: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
