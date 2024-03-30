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
import { scale, verticalScale } from "react-native-size-matters";
import TopHeader from "../../../../components/TopHeader";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import DropDown from "../../../../components/DropDown";
import { DropDownData } from "../../../../utils/Commons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { Spacer } from "../../../../components/Spacer";
import { Inter } from "../../../../utils/Fonts";
import { icon } from "../../../../assets/png/icons";
import CustomInput from "../../../../components/CustomInput";
import DashedLine from "react-native-dashed-line";
import MilesContainer from "../../../../components/MilesContainer";
import CategoryBottomTab from "../../../../components/CategoryBottomTab";
import ToggleSwitch from "toggle-switch-react-native";
import CustomBackModal from "../../../../components/CustomBackModal";

const SetPrice = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBackVisible, setIsBackVisible] = useState(false);

  const [PriceData, setPriceData] = useState([
    {
      title: "Moving",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ],
    },

    {
      title: "Retail Store",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Wholesale Store",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Furniture",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Office Moving",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Electronics & Tech Supplies",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Auto Parts",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Hardware/OEM/Industrial Parts",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Building Material",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "E-Commerce",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },

    {
      label: "Piano",
      title: "Electric Piano",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },

    {
      title: "Spinet Piano",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Upright Piano",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Baby Grand Piano (up to 6.4’)",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Semi Concert Piano (6.4 to 7.6’)",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Heavy Equipment",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Medical Courier",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Hazmat Category",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
    {
      title: "Pool Table",
      isActive: false,
      base: "",
      dedicated: "",
      data: [
        { mile: 20, toMi: "20",toMile:"" },
        { toMile: 20, formMile: 50, toFromMile: "" },
        { mile: 50, fromMi: "50",fromMile:"" },
      ]
    },
  ]);
  const ScheduleQuote = ({ title }) => {
    return (
      <View>
        <View style={AppStyles.justifyRow}>
          <View
            style={{
              ...AppStyles.justifyRow,
              width: "60%",
              //   backgroundColor:"red"
              //   marginBottom: verticalScale(13),
            }}>
            <CustomText
              text={title || "Schedule Quote"}
              color={colors.gray200}
              size={13}
            />

            <Image
              style={{ width: scale(13), height: scale(13) }}
              source={icon.cross}
              resizeMode={"contain"}
            />
          </View>
          <CustomInput
            height={29}
            width={scale(70)}
            paddingHorizontal={1}
            borderRadius={8}
            value={"1.2"}
          />
        </View>
      </View>
    );
  };

  const isActiveMile = (item, index) => {
    const data = [...PriceData];

    data[index].isActive = !item.isActive;

    setPriceData(data);

    console.log("kcnkdnckd", PriceData);
  };

  return (
    <>
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
          <TopHeader
            txt={"Set Price"}
            onApply={() => {
           navigation.navigate("Addons");
        }}
            isBack={() => setIsBackVisible(true)}
            isRightText={"Apply"}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
              }}>
              <CustomText
                text={"Service Type"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <View
                style={{
                  ...AppStyles.box,
                  //   marginBottom: verticalScale(20),
                  paddingBottom: verticalScale(15),
                }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />

                  <View
                    style={{
                      ...AppStyles.justifyRow,
                      marginBottom: verticalScale(13),
                      marginRight: scale(5),
                    }}>
                    <CustomText text={"On Demand"} size={13} />

                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={icon.up}
                      resizeMode={"contain"}
                    />
                  </View>

                  <ScheduleQuote />
                </View>
              </View>

              {PriceData.map((item, index) => {
                return (
                  <>
                    {item.label && (
                      <CustomText
                        fontWeight="700"
                        color={colors.black}
                        fontFam={Inter.bold}
                        text={item.label}
                        style={{ marginTop: verticalScale(20) }}
                        size={17}
                      />
                    )}

                    <View
                      style={{
                        ...AppStyles.justifyRow,
                        marginTop: verticalScale(20),
                        marginBottom: verticalScale(10),

                        marginRight: scale(5),
                      }}>
                      <CustomText
                        fontWeight="700"
                        color={colors.black}
                        fontFam={Inter.bold}
                        text={item.title}
                        size={13}
                      />

                      <View style={AppStyles.row}>
                        <ToggleSwitch
                          isOn={item.isActive}
                          onColor={"#F2F2F2"}
                          offColor={"#F2F2F2"}
                          size="small"
                          style={{ opacity: item.isActive ? 1 : 0.5 }}
                          onToggle={() => isActiveMile(item, index)}
                          thumbOnStyle={{
                            width: 22,
                            height: 22,
                            borderRadius: 9999,
                            backgroundColor: "#008000",
                          }}
                          thumbOffStyle={{
                            width: 22,
                            height: 22,
                            borderRadius: 9999,
                            backgroundColor: "#CCCCCC",
                          }}
                          trackOffStyle={{ width: 52, height: 30 }}
                          trackOnStyle={{ width: 52, height: 30 }}
                        />
                        <Spacer width={scale(10)} />
                        <Image
                          style={{ width: scale(15), height: scale(15) }}
                          source={icon.up}
                          resizeMode={"contain"}
                        />
                      </View>
                    </View>

                    <View style={{ ...AppStyles.box }}>
                      <View style={{ paddingHorizontal: scale(15) }}>
                        <Spacer height={verticalScale(15)} />

                        <View
                          style={{
                            ...AppStyles.justifyRow,
                            //   marginTop: verticalScale(13),
                          }}>
                          <CustomText
                            text={"Base"}
                            color={colors.gray200}
                            size={13}
                          />
                          <CustomInput
                            height={29}
                            value={item.base}
                            width={scale(70)}
                            onChangeText={(txt) => {
                              // Validate the input using a regular expression
                              if (/^\d+$/.test(txt) || txt === "") {
                                const data = [...PriceData];

                                data[index].base = txt;

                                setPriceData(data);
                              }
                            }}
                            editable={item.isActive}
                            paddingHorizontal={1}
                            placeholder={"$"}
                            borderRadius={8}

                            // value={"1.2"}
                          />
                        </View>
                        {item.data.map((it, ind) => {
                          return (
                            <MilesContainer
                              editable={item.isActive}
                              array={PriceData}
                              setArray={setPriceData}
                              ind={index}
                              index={index}
                              
                              item={it}
                            />
                          );
                        })}
                        <View style={{ marginVertical: verticalScale(13) }}>
                          <DashedLine
                            dashLength={6}
                            dashThickness={1}
                            dashGap={5}
                            dashColor={colors.gray}
                          />
                        </View>

                        <View
                          style={{
                            ...AppStyles.justifyRow,
                            marginBottom: verticalScale(13),
                          }}>
                          <CustomText
                            text={"Dedicated"}
                            //   color={colors.}
                            size={13}
                          />
                          <CustomInput
                            height={29}
                            width={scale(70)}
                            value={item.dedicated}
                            editable={item.isActive}
                            paddingHorizontal={1}
                            placeholder={"$/day"}
                            borderRadius={8}
                            onChangeText={(txt) => {
                              // Validate the input using a regular expression
                              if (/^\d+$/.test(txt) || txt === "") {
                                const data = [...PriceData];

                                data[index].dedicated = txt;

                                setPriceData(data);
                              }
                            }}

                            // value={"1.2"}
                          />
                        </View>
                      </View>
                    </View>
                  </>
                );
              })}

              <Spacer height={verticalScale(30)} />
            </View>
          </ScrollView>
        </View>
      </Screen>
      {/* <CustomBackModal
        startButtonText={"Clear All"}
        saveButtonText={"Apply"}
        onSave={() => {
          setIsModalVisible(false);
          // setTimeout(() => {
          //   navigation.navigate("Addons");
          // }, 1000);
        }}
        onStartButton={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.navigate("Addons");
          }, 1000);
        }}
        //   onStartButton
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      /> */}

<CustomBackModal
        startButtonText={"Clear"}
        saveButtonText={"Apply"}
        cancelText={"reset"}
        onSave={() => {
          setIsBackVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        onStartButton={() => {
          setIsBackVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        //   onStartButton
        modalVisible={isBackVisible}
        setModalVisible={setIsBackVisible}
      />
    </>
  );
};

export default SetPrice;

const styles = StyleSheet.create({});
