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
import React from "react";
import CustomText from "../../../components/CustomText";
import { icon } from "../../../assets/png/icons";
import { colors } from "../../../utils/colors";
import { Inter } from "../../../utils/Fonts";
import CustomInput from "../../../components/CustomInput";
import { AppStyles } from "../../../utils/AppStyle";
import { Spacer } from "../../../components/Spacer";
import { image } from "../../../assets/png/images";
import { Screen } from "../../../utils/ui/Screen";
import { scale, verticalScale } from "react-native-size-matters";
import CustomLine from "../../../components/CustomLine/CustomLine";
import DropDown from "../../../components/DropDown";
import CustomerTicket from "../../../components/CustomerTicket";
import ActivitySummary from "./ActivitySummary";
import OrderInvoice from "./OrderInvoice";
import OrderRoute from "./OrderRoute";
import CustomButton from "../../../components/CustomButton";
import DashedLine from "react-native-dashed-line";

const TrackOrder = ({ navigation, route }) => {
  const orderData = route?.params.orderData;
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
      img: image.defimg900,
      name: "Will Smith",
      active: "Available",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
    },
    {
      img: image.defimg600,
      name: "Kadin Botosh",
      active: "Busy",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Cargo-van",
    },
    {
      img: image.defimg700,
      name: "Will Smith",
      active: "On Schedule",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
    },
    {
      img: image.defimg700,
      name: "Will Smith",
      active: "Inactive",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
    },
  ];

  const orderStatus = [
    { name: "Accepted Order", isCheck: true },
    { name: "Picked Up(1/1)", isCheck: true },
    { name: "En Route (0/1)" },
    { name: "Dropped Off" },
    { name: "Leave Review" },
  ];

  const renderCustomerUser = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(10),
          }}>
          <CustomerTicket
            backgroundColor={"#F7F7F7"}
            isNoShadow={true}
            item={orderData}
          />
        </View>
      </>
    );
  };
  return (
    <Screen
      height={40}
      backgroundColor={colors.white}
      // topBarColor={colors.primary}
      barStyle={"dark-content"}>
      <View
        style={{
          flex: 1,

          backgroundColor: colors.white,
        }}>
        <View
          style={{
            ...AppStyles.justifyRow,
            backgroundColor: colors.white,
            paddingVertical: verticalScale(13),
            paddingHorizontal: scale(15),
            elevation: 5,
            shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
            shadowOffset: { width: 4, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}>
          <TouchableOpacity
            style={{ width: "33%" }}
            onPress={() => navigation.goBack()}>
            <Image
              style={{ width: scale(15), height: scale(15) }}
              resizeMode="contain"
              source={icon.back}
            />
          </TouchableOpacity>
          <CustomText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={14}
            text={"Track Order"}
          />
          <View style={{ width: "33%" }} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(15),
            }}>
            <View style={AppStyles.justifyRow}>
              <CustomText
                text={"Order #7162533"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                size={15}
              />

              <Image
                style={{
                  width: scale(35),
                  height: scale(35),
                }}
                source={image.man}
                resizeMode="contain"
              />
            </View>
            <Spacer height={verticalScale(10)} />
            <CustomerTicket
              backgroundColor={"#F7F7F7"}
              isNoShadow={true}
              item={orderData}
            />
          </View>

          <View style={{ padding: scale(15) }}>
            <ActivitySummary />
            <View
              style={{
                ...styles.box,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: scale(15),
                paddingVertical: verticalScale(10),
                marginVertical: verticalScale(20),
                justifyContent: "space-between",
              }}>
              <View>
                <CustomText
                  text={"Contact Driver"}
                  color={colors.gray100}
                  fontFam={Inter.bold}
                  fontWeight="700"
                  size={12}
                />
                <Spacer height={verticalScale(5)} />
                <CustomText
                  text={"Write Here"}
                  color={colors.gray100}
                  fontWeight="400"
                  size={15}
                />
              </View>

              <View style={AppStyles.row}>
                <TouchableOpacity
                activeOpacity={0.6}
                >
                <Image
                  style={{
                    width: scale(35),
                    height: scale(35),
                  }}
                  resizeMode="contain"
                  source={image.share}
                />

                </TouchableOpacity>
              
                <Spacer width={scale(10)} />
                <TouchableOpacity
                activeOpacity={0.6}
                >
                <Image
                  style={{
                    width: scale(35),
                    height: scale(35),
                  }}
                  resizeMode="contain"
                  source={image.phone}
                />

                </TouchableOpacity>
              
              </View>
            </View>

            <View
              style={{
                ...styles.box,
              }}>
              <View>
                <View
                  style={{
                    ...AppStyles.justifyRow,
                    paddingHorizontal: scale(15),
                    paddingVertical: verticalScale(10),
                  }}>
                  <CustomText
                    text={"Current Status"}
                    color={colors.black}
                    fontFam={Inter.semiBold}
                    fontWeight="600"
                    size={14}
                  />

                  <CustomButton
                    text={"en route"}
                    height={30}
                    size={15}
                    textColor={colors.primary}
                    bgColor={"#12D1AF20"}
                    width={scale(90)}
                  />
                </View>
                <CustomLine />

                <Spacer height={verticalScale(5)} />
              </View>

              <View
                style={{
                  ...AppStyles.row,
                  paddingVertical: verticalScale(10),
                  paddingLeft: scale(15),
                }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ ...AppStyles.row }}>
                    {orderStatus.map((item, index) => {
                        count=index+1
                      return (
                        <View style={{ ...AppStyles.row }}>
                            {item.isCheck?(
                                  <View
                                  style={{
                                    ...styles.circleContainer,
                                    backgroundColor: colors.green,
                                  }}>
                                   <Image
                                   style={{
                                     width: scale(10),
                                     height: scale(10),
                                   }}
                                   resizeMode="contain"
                                   source={icon.tick}
                                 />
                                </View>
                                 

                            ):
                            <View
                            style={{
                              ...styles.circleContainer,
                              backgroundColor: colors.gray,
                            }}>
                            <CustomText
                              text={"0"+count}
                              color={colors.white}
                              fontFam={Inter.medium}
                              fontWeight="600"
                              size={9}
                            />
                          </View>
                            }
                       

                          <Spacer width={scale(5)} />
                          <CustomText
                            text={item.name}
                            color={item.isCheck?colors.green:colors.gray}
                            fontFam={Inter.medium}
                            fontWeight="600"
                            size={10}
                          />
                          {
                              orderStatus.length-1!==index&&(
                                <DashedLine
                                style={{ width: 15 }}
                                dashLength={3}
                                dashThickness={1}
                                dashGap={3}
                                dashColor={colors.gray}
                              />
                              )
                          }

                        

                          {/* <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} /> */}
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>

            <OrderRoute />
            <OrderInvoice />
            <Spacer height={verticalScale(20)} />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
  },
  circleContainer: {
    width: scale(21),
    height: scale(21),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});
