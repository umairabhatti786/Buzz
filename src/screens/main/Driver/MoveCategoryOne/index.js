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
import CustomBackModal from "../../../../components/CustomBackModal";
import DropDownModal from "../../../../components/DropDownModal";

const MoveCategoryOne = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [base,setBase]=useState("")
  const [dedicated,setDedicated]=useState("")

  const [vehicleSize, setVehicleSize] = useState("Standard (2-4 seats)");
  const [isVehicleSizeModal, setIsVehicleSizeModal] = useState(false);

  const vehicleSizeData = [
    "Standard (2-4 seats)",
    "Large (2-6 seats)",
    "X-Large (6-14 seats)",
    "+ Premium (Luxury)",
    "Assisted Ride",
  ];
  // data: [
  //   { mile: 20, toMi: "20",toMile:"" },
  //   { toMile: 20, formMile: 50, toFromMile: "" },
  //   { mile: 50, fromMi: "50",fromMile:"" },
  // ],

  const [PriceData,setPriceData] =useState ([
    { mile: 20, toMi: "20",toMile:"" },
    { toMile: 20, formMile: 50, toFromMile: "" },
    { mile: 50, fromMi: "50",fromMile:"" },
   
  ])
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
            txt={"Ride Service"}
            isBack={() => setIsModalVisible(true)}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
              }}>
              <CustomLine />

              <View
                style={{
                  ...AppStyles.justifyRow,
                  marginVertical: verticalScale(15),
                }}>
                <CustomText
                  text={"Vehicle Size/Feature"}
                  color={colors.black}
                  size={13}
                />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(180)}
                  editable={false}
                  onShowPassword={() => setIsVehicleSizeModal(true)}
                  rightImage={icon.down}
                  value={vehicleSize}
                  paddingHorizontal={5}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />

                {/* <DropDown
                  placeholder={"Standard (2-4 Seats)"}
                  dropWidth={scale(180)}
                  // paddingHorizontal={scale(30)}
                  //   data={data}
                  data={DropDownData.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                /> */}
              </View>
              <CustomLine />

              <CustomText
                text={"Set Price"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <View style={{ ...AppStyles.box }}>
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
                      marginRight: scale(5),
                    }}>
                    <CustomText text={"Scheduled"} size={13} />

                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={icon.up}
                      resizeMode={"contain"}
                    />
                  </View>

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
                      width={scale(70)}
                      paddingHorizontal={1}
                      placeholder={"$"}
                      value={base}
                      borderRadius={8}
                      onChangeText={(txt)=>{

              if (/^\d+$/.test(txt) || txt === "") {
               

                setBase(txt);
              }
                      }}
                      

                      // value={"1.2"}
                    />
                  </View>
                  
                  {PriceData.map((item, index) => {
                    return <MilesContainer 

                    editable={item.isActive}
                    array={PriceData}
                    setArray={setPriceData}
                    ind={index}
                    index={1}
                    
                    item={item}
                    />;
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
                      paddingHorizontal={1}
                      placeholder={"$/day"}
                      borderRadius={8}
                      value={dedicated}
                      onChangeText={(txt)=>{

                        if (/^\d+$/.test(txt) || txt === "") {
                         
          
                          setDedicated(txt);
                        }
                                }}

                      // value={"1.2"}
                    />
                  </View>
                </View>
              </View>

              <CustomText
                text={"Price Adjuster"}
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
                style={{ ...AppStyles.box, marginBottom: verticalScale(50) }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />

                  <ScheduleQuote />

                  <CustomText
                    text={"Note: Only applicable to Scheduled Service"}
                    color={colors.gray}
                    style={{ marginVertical: verticalScale(15) }}
                    size={13}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Screen>

      <CategoryBottomTab />

      <CustomBackModal
        startButtonText={"Don’t Save"}
        onSave={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        onStartButton={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        //   onStartButton
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      />

<DropDownModal
      modalVisible={isVehicleSizeModal}
      selectedObject={vehicleSize}
      title={"Vehicle Size/Feature"}
      setSelectedObject={setVehicleSize}
      setModalVisible={setIsVehicleSizeModal}
      data={vehicleSizeData}
      />
    </>
  );
};

export default MoveCategoryOne;

const styles = StyleSheet.create({});
