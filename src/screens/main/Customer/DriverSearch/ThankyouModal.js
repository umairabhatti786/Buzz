import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Modal from "react-native-modal";
  import { windowHeight } from "../../../../utils/Commons";
  import { AppStyles } from "../../../../utils/AppStyle";
  import { colors } from "../../../../utils/colors";
  import NewText from "../../../../components/NewText";
  import { icon } from "../../../../assets/png/icons";
  import { scale, verticalScale } from "react-native-size-matters";
  import CustomLine from "../../../../components/CustomLine/CustomLine";
  import DashedLine from "react-native-dashed-line";
  import Days from "../../../../components/Days";
  import { Inter } from "../../../../utils/Fonts";
  import HorizontalContainer from "../../../../components/HorizontalContainer";
  import Button from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";
  
  const ThankyouModal = ({
    modalVisible,
    handelModal,
    setModalVisible,
    setIsRateExperienceModal
  }) => {
  const navigation=useNavigation()
  
    return (
      <Modal
        isVisible={modalVisible}
        onBackdropPress={handelModal}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "90%",
            maxHeight: windowHeight / 1.1,
            backgroundColor: colors.white,
            borderRadius: scale(15),
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            activeOpacity={0.6}
            //   disabled={!onShowPassword}
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Image
              source={icon.cross}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: colors.gray100,
              }}
            />
          </TouchableOpacity>
          <View style={styles.circle}>
            <Image
              style={{ width: 18, height: 18 }}
              resizeMode="contain"
              source={icon.tick}
            />
          </View>
          <NewText
            color={colors.black}
            size={19}
            style={{ textAlign: "center", marginTop: 5 }}
            fontWeight={"700"}
            text={"Thank you!"}
          />
  
          <View style={{ padding: 15 }}>
            <NewText
              text={"Before you go, Please leave an instruction."}
              color={colors.gray200}
              style={{ textAlign: "center", marginHorizontal: 20 }}
              fontWeight="400"
              size={14}
            />
  
            <View
              style={{ marginVertical: verticalScale(15), marginHorizontal: 15 }}
            >
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>
  
            <View
              style={{
                marginBottom: verticalScale(13),
                width: "95%",
                height: 130,
                borderColor: colors.black40,
                borderWidth: 1,
                borderRadius: 9,
                alignSelf: "center",
                padding: 15,
              }}
            >
              <NewText
                text={"E.g"}
                color={colors.gray}
                style={{ marginBottom: 5 }}
                fontWeight="400"
                size={13}
              />
  
              <NewText
                text={"Pick up contact: (000)-000-0000"}
                color={colors.gray}
                style={{ marginBottom: 5 }}
                fontWeight="400"
                size={13}
              />
              <NewText
                text={"Enter gate code 0000"}
                color={colors.gray}
                fontWeight="400"
                size={13}
              />
                 <NewText
                text={"Drop off contact"}
                color={colors.gray}
                style={{ marginBottom: 10,marginTop:20 }}
                fontWeight="400"
                size={13}
              />
            </View>
  
            <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
              <Button
                text={"Cancel"}
                height={28}
                onPress={()=>setModalVisible(false)}
                bgColor={"#EEEEEE"}
                borderColor={"transparent"}
                borderWidth={1}
                size={16}
                borderRadius={7}
                textColor={colors.gray}
                paddingHorizontal={20}
              />
              <Button
                text={"Done"}
                height={28}
                onPress={() => {
                  setModalVisible(false);
                  setTimeout(() => {
                      // setIsRateExperienceModal(true)
                    navigation.navigate("ManageOrders");
                  }, 500);
                }}
                bgColor={colors.primary}
                borderColor={"transparent"}
                borderWidth={1}
                size={16}
                borderRadius={7}
                textColor={colors.white}
                paddingHorizontal={12}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default ThankyouModal;
  
  const styles = StyleSheet.create({
    imgContainer: {
      width: 160,
      height: 160,
      borderRadius: 999,
      backgroundColor: colors.grey400,
      alignItems: "center",
      justifyContent: "center",
    },
    daysContainer: {
      width: 90,
      height: 40,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.black40,
      paddingHorizontal: 10,
    },
  
    input: {
      color: colors.black,
      fontFamily: "700",
      fontSize: 14,
      fontFamily: Inter.bold,
      height: 40,
    },
    circle: {
      width: 45,
      height: 45,
      borderRadius: 999,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
      alignSelf: "center",
    },
  });
  