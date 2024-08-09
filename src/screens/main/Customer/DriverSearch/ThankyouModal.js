import {
  FlatList,
  Image,
  ScrollView,
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
import { image } from "../../../../assets/png/images";
import CustomInput from "../../../../components/CustomInput";
import { Spacer } from "../../../../components/Spacer";

const ThankyouModal = ({
  modalVisible,
  handelModal,
  setModalVisible,
  setIsRateExperienceModal,
}) => {
  const navigation = useNavigation();

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: "90%",
          maxHeight: windowHeight / 1.2,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
        }}
      >
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.circle}>
            <Image
              style={{ width: scale(18), height: scale(18) }}
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

          <View style={{ padding: scale(10), gap: verticalScale(10) }}>
            <NewText
              text={
                "Before you go, Please leave Pick-up and Drop-off instruction."
              }
              color={colors.gray200}
              style={{ textAlign: "center", marginHorizontal: scale(20) }}
              fontWeight="400"
              size={14}
            />

            <View
              style={{ marginVertical: verticalScale(5), marginHorizontal: 15 }}
            >
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>
            <View style={{ paddingHorizontal: scale(10) }}>
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                text={"Pick-Up Instruction"}
              />
            </View>

            <View style={{ flexDirection: "row", gap: scale(8) }}>
              <Image
                style={{ width: scale(25), height: scale(25) }}
                resizeMode="contain"
                source={image.address}
              />
              <NewText
                text={"10750 Saint Charles Rock Road, Saint Ann, MO 63074, US"}
                color={colors.black}
                style={{ marginRight: scale(30) }}
                fontWeight="400"
                size={15}
              />
            </View>
            <View
              style={{ paddingHorizontal: scale(10), gap: verticalScale(5) }}
            >
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Name"}
              />
              <CustomInput
                height={35}
                placeholder={"Enter Name at Pick-up or N/A "}
                value={""}
              />
              <Spacer height={verticalScale(5)} />

              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Phone"}
              />
              <CustomInput
                height={35}
                placeholder={"(000)-000-0000"}
                value={""}
              />
              <Spacer height={verticalScale(5)} />

              <View style={styles.contactDetail}>
                <NewText
                  text={"Enter gate code 0000"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />

                <NewText
                  text={"Knock on the door"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
                <NewText
                  text={"Ring the bell"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
                <NewText
                  text={"Walk to front desk"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
                <NewText
                  text={"Go to Shipping/Receiving"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
              </View>
            </View>

            <View style={{ paddingHorizontal: scale(10) }}>
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                text={"Drop-off Instruction (1)"}
              />
            </View>

            <View style={{ flexDirection: "row", gap: scale(8) }}>
              <Image
                style={{ width: scale(25), height: scale(25) }}
                resizeMode="contain"
                source={image.address}
              />
              <NewText
                text={"Walmart Super Centre, Tampa, FL 33612, US"}
                color={colors.black}
                style={{ marginRight: scale(30) }}
                fontWeight="400"
                size={15}
              />
            </View>
            <View
              style={{ paddingHorizontal: scale(10), gap: verticalScale(5) }}
            >
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Name"}
              />
              <CustomInput
                height={35}
                placeholder={"Enter Name at Pick-up or N/A "}
                value={""}
              />
              <Spacer height={verticalScale(5)} />

              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Phone"}
              />
              <CustomInput
                height={35}
                placeholder={"(000)-000-0000"}
                value={""}
              />
              <Spacer height={verticalScale(5)} />

              <View style={styles.contactDetail}>
                <NewText
                  text={"Enter gate code 0000"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />

                <NewText
                  text={"Knock on the door"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
                <NewText
                  text={"Ring the bell"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
                <NewText
                  text={"Walk to front desk"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
                <NewText
                  text={"Go to Shipping/Receiving"}
                  color={colors.gray}
                  fontWeight="400"
                  size={13}
                />
              </View>
            </View>

            <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
              <Button
                text={"Later"}
                height={28}
                onPress={() => setModalVisible(false)}
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
        </ScrollView>
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
  contactDetail: {
    marginBottom: verticalScale(13),
    width: "100%",
    borderColor: colors.black40,
    borderWidth: 1,
    borderRadius: 9,
    alignSelf: "center",
    padding: 15,
    gap: verticalScale(5),
  },
});
