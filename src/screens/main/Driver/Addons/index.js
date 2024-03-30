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

const Addons = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBackVisible, setIsBackVisible] = useState(false);

  const [uploadingHelpData,setUploadingHelpData]=useState({
    loadingFlat:"",
    loadingElevator:"",
    loadingStairsMedium:"",
    loadingStairsHeavy:"",
    unloadingFlat:"",
    unloadingElevator:"",
    unloadingStairsMedium:"",
    unloadingStairsHeavy:"",
    ratePerHour:"",
    ratePerDay:""
    


  })
  const PriceData = [
    {
      title: "Boxing/Unboxing Help",
      isActive: false,
    },
    {
      title: "Assembling/Disassembling",
      isActive: false,
    },
    {
      title: "Installation/Dismanting",
      isActive: false,
    },
  ];
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

  const EnableAddons = ({ isActive, title, isNext, fontWight, fontSize }) => {
    return (
      <View
        style={{
          ...AppStyles.justifyRow,
          marginBottom: verticalScale(10),

          marginRight: scale(5),
        }}>
        <CustomText
          fontWeight={fontWight || "700"}
          color={colors.black}
          fontFam={Inter.bold}
          text={title}
          size={fontSize || 14}
        />

        <View style={AppStyles.row}>
          <ToggleSwitch
            isOn={isActive}
            onColor={"#F2F2F2"}
            offColor={"#F2F2F2"}
            size="small"
            // style={{ opacity: isActive ? 1 : 0.5 }}
            // onToggle={setIsActive}
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
          {isNext && (
            <>
              <Spacer width={scale(10)} />
              <Image
                style={{ width: scale(15), height: scale(15) }}
                source={icon.up}
                resizeMode={"contain"}
              />
            </>
          )}
        </View>
      </View>
    );
  };

  const InputWeight = ({ title, fontSize, placeholder, isDashedLine,value,onChangeText }) => {
    return (
      <View style={{ paddingHorizontal: scale(15) }}>
        <View
          style={{
            ...AppStyles.justifyRow,
          }}>
          <CustomText text={title} color={colors.black} size={fontSize || 13} />
          <CustomInput
            height={29}
            width={scale(100)}
            paddingHorizontal={1}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            borderRadius={8}

            // value={"1.2"}
          />
        </View>

        <View style={{ marginVertical: verticalScale(10) }}>
          {isDashedLine && (
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.gray}
            />
          )}
        </View>
      </View>
    );
  };

  const PriceInput = ({
    title,
    fontSize,
    placeholder,
    isShowLine,
    isActive,
  }) => {
    return (
      <View>
        <View
          style={{
            ...AppStyles.justifyRow,
            paddingHorizontal: scale(15),
          }}>
          <CustomText text={title} color={colors.black} size={fontSize || 13} />

          <View style={AppStyles.row}>
            <CustomInput
              height={29}
              width={scale(100)}
              paddingHorizontal={1}
              placeholder={placeholder}
              borderRadius={8}

              // value={"1.2"}
            />
            <Spacer width={scale(10)} />

            <ToggleSwitch
              isOn={isActive}
              onColor={"#F2F2F2"}
              offColor={"#F2F2F2"}
              size="small"
              // style={{ opacity: isActive ? 1 : 0.5 }}
              // onToggle={setIsActive}
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
          </View>
        </View>
        {isShowLine && (
          <View style={{ marginVertical: verticalScale(10) }}>
            <CustomLine />
          </View>
        )}
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
            txt={"Add-ons"}
            onApply={() => {
              setIsModalVisible(true);
            }}
            isBack={() => setIsBackVisible(true)}
            isRightText={"Apply"}
          />
        

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(30),
              }}>
              <EnableAddons
                isActive={false}
                title={"Lifting/Loading/Unloading Help"}
              />

              <View style={{ ...AppStyles.box }}>
                <View>
                  <Spacer height={verticalScale(15)} />
                  <View style={{ paddingHorizontal: scale(15) }}>
                    <EnableAddons
                      isActive={false}
                      fontWight={"500"}
                      isNext={true}
                      title={"Base Price"}
                      fontSize={13}
                    />
                  </View>

                  <CustomText
                    text={"Loading"}
                    fontWeight={"700"}
                    style={{
                      marginVertical: verticalScale(10),
                      paddingHorizontal: scale(15),
                    }}
                    //   color={colors.}
                    size={13}
                  />
                  <InputWeight
                    placeholder={"$"}
                    value={uploadingHelpData.loadingFlat}
                    title={"Flat (no stairs or elevator)"}
                    isDashedLine
                    onChangeText={(txt)=>{

                      if (/^\d+$/.test(txt) || txt === "") {

                        setUploadingHelpData({...uploadingHelpData,loadingFlat:txt})
                       
        
                      }
        
                    }}
                  />
                  <InputWeight
                    placeholder={"$"}
                    title={"Elevator"}
                    
                    isDashedLine
                    // onChangeText={(txt)=>{

                    //   if (/^\d+$/.test(txt) || txt === "") {

                    //     setUploadingHelpData({...uploadingHelpData,loadingFlat:txt})
                       
        
                    //   }
        
                    // }}
                  />
                  <InputWeight
                    placeholder={"$/Per Flight"}
                    title={"Stairs (Medium Weight)"}
                    isDashedLine
                  />

                  <InputWeight
                    placeholder={"$/Per Flight"}
                    title={"Stairs (Heavy Weight)"}
                  />

                  <CustomText
                    text={"Unloading"}
                    fontWeight={"700"}
                    style={{
                      marginVertical: verticalScale(10),
                      paddingHorizontal: scale(15),
                    }}
                    //   color={colors.}
                    size={13}
                  />
                  <InputWeight
                    placeholder={"$"}
                    title={"Flat (no stairs or elevator)"}
                    isDashedLine
                  />
                  <InputWeight
                    placeholder={"$"}
                    title={"Elevator"}
                    isDashedLine
                  />
                  <InputWeight
                    placeholder={"$/Per Flight"}
                    title={"Stairs (Medium Weight)"}
                    isDashedLine
                  />

                  <InputWeight
                    placeholder={"$/Per Flight"}
                    title={"Stairs (Heavy Weight)"}
                  />
                  <View
                    style={{
                      marginBottom: verticalScale(10),
                      marginTop: verticalScale(-10),
                    }}>
                    <CustomLine />
                  </View>
                  <PriceInput
                    title={"Rate Per Hour"}
                    placeholder={"$"}
                    isShowLine
                  />

                  <PriceInput title={"Rate Per Day"} placeholder={"$"} />
                  <Spacer height={verticalScale(10)} />
                </View>
              </View>

              {PriceData.map((item, index) => {
                return (
                  <>
                    <View style={{ marginTop: verticalScale(25) }}>
                      <EnableAddons
                        isActive={false}
                        title={"Lifting/Loading/Unloading Help"}
                      />
                    </View>

                    <View style={{ ...AppStyles.box }}>
                      <View>
                        <Spacer height={verticalScale(15)} />

                        <PriceInput
                          title={"Base Price"}
                          placeholder={"$"}
                          isShowLine
                        />
                        <PriceInput
                          title={"Rate Per Hour"}
                          placeholder={"$"}
                          isShowLine
                        />
                        <PriceInput title={"Rate Per Day"} placeholder={"$"} />

                        <Spacer height={verticalScale(10)} />
                      </View>
                    </View>
                  </>
                );
              })}

              <>
                <View style={{ marginTop: verticalScale(25) }}>
                  <EnableAddons isActive={false} title={"Equipment Rental"} />
                </View>

                <View style={{ ...AppStyles.box }}>
                  <View>
                    <Spacer height={verticalScale(15)} />
                    <View
                      style={{
                        paddingHorizontal: verticalScale(15),
                        paddingBottom: verticalScale(10),
                      }}>
                      <EnableAddons
                        isActive={false}
                        fontSize={13}
                        fontWight={"500"}
                        title={"4-Wheel  Dolly"}
                        isNext
                      />
                    </View>

                    <PriceInput title={"Base Price"} placeholder={"$"} />
                    <View
                      style={{
                        marginVertical: verticalScale(10),
                        paddingHorizontal: scale(15),
                      }}>
                      <DashedLine
                        dashLength={6}
                        dashThickness={1}
                        dashGap={5}
                        dashColor={colors.gray}
                      />
                    </View>
                    <PriceInput title={"Rate Per Hour"} placeholder={"$"} />
                    <View
                      style={{
                        marginVertical: verticalScale(10),
                        paddingHorizontal: scale(15),
                      }}>
                      <DashedLine
                        dashLength={6}
                        dashThickness={1}
                        dashGap={5}
                        dashColor={colors.gray}
                      />
                    </View>

                    <PriceInput title={"Rate Per Day"} placeholder={"$"} />
                    <View style={{ marginVertical: verticalScale(10) }}>
            <CustomLine />
          </View>
          <View style={{paddingHorizontal:scale(15)}}>
          <EnableAddons
                        isActive={false}
                        fontSize={13}
                        fontWight={"500"}
                        title={"Appliance Dolly"}
                        isNext
                      />

          </View>
          <View style={{ marginBottom: verticalScale(10) }}>
            <CustomLine />
          </View>
          <View style={{paddingHorizontal:scale(15)}}>
          <EnableAddons
                        isActive={false}
                        fontSize={13}
                        fontWight={"500"}
                        title={"Hand Truck Dolly"}
                        isNext
                      />

          </View>
          <View style={{ marginBottom: verticalScale(10) }}>
            <CustomLine />
          </View>
          <View style={{paddingHorizontal:scale(15)}}>
          <EnableAddons
                        isActive={false}
                        fontSize={13}
                        fontWight={"500"}
                        title={"Loading Ramp"}
                        isNext
                      />

          </View>
          <View style={{ marginBottom: verticalScale(10) }}>
            <CustomLine />
          </View>
          <View style={{paddingHorizontal:scale(15)}}>
          <EnableAddons
                        isActive={false}
                        fontSize={13}
                        fontWight={"500"}
                        title={"Material Lift"}
                        isNext
                      />

          </View>

                    

                    <Spacer height={verticalScale(10)} />
                  </View>
                </View>
              </>

              <Spacer height={verticalScale(30)} />
            </View>
          </ScrollView>
        </View>
      </Screen>
{/* 
      <CustomBackModal
        startButtonText={"Clear All"}
        saveButtonText={"Apply"}
        onSave={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.navigate("Addons");
          }, 1000);
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

export default Addons;

const styles = StyleSheet.create({});
