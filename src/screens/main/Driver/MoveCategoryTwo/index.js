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
import HorizontalContainerToggle from "../../../../components/HorizontalContainerToggle";
import DropDownModal from "../../../../components/DropDownModal";
  
  const MoveCategoryTwo = ({ navigation }) => {
    const [vehicleType, setVehicleType] = useState("10-12 ft Box Truck");
    const [isVehicleTypeModal, setIsVehicleTypeModal] = useState(false);
  
    const vehicleTypeData = [
      "Car",
      "Suv",
      "Mini-Van",
      "Pickup Truck",
      "Cargo Van",
      "Sprinter Van",
      "Sprinter Van",
      "10-12 ft Box Truck",
      "14-18 ft Box Truck",
      "20-24 ft Box Truck",
      "26 ft Box Truck",


    ];
  
      const  PriceData=[
          {mile:20,},
          {toMile:20,formMile:50},
          {mile:50,},
  
      ]

      const UnloadingCapacity = [
        { name: "Light Weight (< 20 lbs)", isActive: true },
        { name: "Medium Weight (21 - 100 lbs)", isActive: true },
        { name: "Heavy Weight (>100 lbs)", isActive: false },
      ];

      const SizeCapacity = [
        { name: "Few Things", isActive: true },
        { name: "Small (less than 1000 sq ft)", isActive: true },
        { name: "Medium (1000-3000 sq ft)", isActive: false },
        { name: "Large (greater than 3000 sq ft)", isActive: false },
      ];


      const MovingCapacity = [
        { name: "Studio", isActive: true },
        { name: "1 Bedroom home", isActive: true },
        { name: "2 Bedroom home", isActive: false },
        { name: "3 Bedroom home", isActive: false },
        { name: "4 Bedroom home", isActive: false },
        { name: "5 Bedroom home", isActive: false },

      ];
    const ScheduleQuote = ({title}) => {
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
                text={ title|| "Schedule Quote"}
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

            <TopHeader txt={"Delivery Service"} 
                                isBack={()=>navigation.goBack()}

            />
  
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  paddingHorizontal: scale(15),
                  paddingTop: verticalScale(15),
                }}>
                

                <CustomText
                text={"Lifting/Loading/Unloading Capacity"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(10),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {UnloadingCapacity.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          // text1={"On-demand"}
                        />
                        {UnloadingCapacity.length != index + 1 ? (
                          <View style={{ marginVertical: verticalScale(13) }}>
                            <DashedLine
                              dashLength={6}
                              dashThickness={1}
                              dashGap={5}
                              dashColor={colors.gray}
                            />
                          </View>
                        ) : (
                          <Spacer height={verticalScale(13)} />
                        )}
                      </>
                    );
                  })}
                </View>
              </View>


              <CustomText
                text={"Size Capacity"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {SizeCapacity.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          // text1={"On-demand"}
                        />
                        {SizeCapacity.length != index + 1 ? (
                          <View style={{ marginVertical: verticalScale(13) }}>
                            <DashedLine
                              dashLength={6}
                              dashThickness={1}
                              dashGap={5}
                              dashColor={colors.gray}
                            />
                          </View>
                        ) : (
                          <Spacer height={verticalScale(13)} />
                        )}
                      </>
                    );
                  })}
                </View>
              </View>

              <CustomText
                text={"Home Moving Capacity"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {MovingCapacity.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          // text1={"On-demand"}
                        />
                        {MovingCapacity.length != index + 1 ? (
                          <View style={{ marginVertical: verticalScale(13) }}>
                            <DashedLine
                              dashLength={6}
                              dashThickness={1}
                              dashGap={5}
                              dashColor={colors.gray}
                            />
                          </View>
                        ) : (
                          <Spacer height={verticalScale(13)} />
                        )}
                      </>
                    );
                  })}
                </View>
              </View>

              <CustomText
                  text={"Vehicle Type"}
                  color={colors.black}
                  fontFam={Inter.bold}
                  fontWeight="700"
                  style={{
                    marginTop: verticalScale(30),
                    marginBottom: verticalScale(15),
                  }}
                  size={14}
                />

              <View
                style={{
                  ...AppStyles.box,
                  padding: scale(20),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // marginVertical: verticalScale(30),
                }}>
                <CustomText
                  text={"Select Vehicle"}
                  color={colors.black}
                  size={13}
                />

<CustomInput
                            height={29}
                            color={colors.gray100}
                            width={scale(160)}
                            editable={false}
                            dropDown={true}
                            onShowPassword={()=>setIsVehicleTypeModal(true)}
                          
                            rightImage={icon.down}
                            value={vehicleType}
                            paddingHorizontal={10}
                            // placeholder={"$/day"}
                            borderRadius={8}

                          />

                {/* <DropDown
                  placeholder={"10-12 ft. Box Truck"}
                  dropWidth={scale(160)}
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

              <CustomText
                  text={"Service Description"}
                  color={colors.black}
                  fontFam={Inter.bold}
                  fontWeight="700"
                  style={{
                    marginTop: verticalScale(30),
                    marginBottom: verticalScale(15),
                  }}
                  size={14}
                />


              <CustomInput height={50} 
              placeholderTextColor={colors.black}
              rightImage={icon.nexticon}
              
              placeholder={"Set Price"} />

<CustomText
                  text={"Addons"}
                  color={colors.black}
                  fontFam={Inter.bold}
                  fontWeight="700"
                  style={{
                    marginTop: verticalScale(30),
                    marginBottom: verticalScale(15),
                  }}
                  size={14}
                />


              <CustomInput height={50} 
              placeholderTextColor={colors.black}
              rightImage={icon.nexticon}
              
              placeholder={"Select Addons"} />

  
          
  
             
  
  
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
  
  
  
  
                <View style={{ ...AppStyles.box,marginBottom:verticalScale(50) }}>
                  <View style={{ paddingHorizontal: scale(15) }}>
                    <Spacer height={verticalScale(15)} />
  
  
                    <ScheduleQuote />
  
                    <CustomText
                text={  "Note: Only applicable to Scheduled Service"}
                color={colors.gray}
                style={{marginVertical:verticalScale(15)}}
                size={13}
              />
  
                    
  
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Screen>
  
        <CategoryBottomTab/>

        <DropDownModal
      modalVisible={isVehicleTypeModal}
      selectedObject={vehicleType}
      title={"Select Time"}
      setSelectedObject={setVehicleType}
      setModalVisible={setIsVehicleTypeModal}
      data={vehicleTypeData}
      />
      </>
    );
  };
  
  export default MoveCategoryTwo;
  
  const styles = StyleSheet.create({});
  