import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";
import { AppStyles } from "../../utils/AppStyle";
import CustomLine from "../CustomLine/CustomLine";
import { Inter } from "../../utils/Fonts";
import { image } from "../../assets/png/images";
import CustomButton from "../CustomButton";
import ToggleSwitch from "toggle-switch-react-native";

const ProfileCard = ({ img, user, buttonWidth, isRating,isActive,setIsActive }) => {
  // const [isActive, setIsActive] = useState(true);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      // onPress={()=>navigation.navigate("CustomerDriverSetting")}
      style={{ ...styles.box, paddingVertical: verticalScale(10) }}>
      <View style={{ ...AppStyles.justifyRow, paddingLeft: scale(10) }}>
        <View style={AppStyles.row}>
          <Image
            style={{
              width: scale(60),
              height: scale(60),
              borderRadius: scale(8),
              opacity: isActive ? 1 : 0.5,
            }}
            source={img}
          />
          <View
            style={{ paddingLeft: scale(10), paddingTop: verticalScale(3) }}>
            <View>
              <CustomText
                text={"Will Smith"}
                size={15}
                fontWeight={"700"}
                style={{ opacity: isActive ? 1 : 0.5 }}
                fontFam={Inter.bold}
                color={colors.black}
              />
              <Spacer height={verticalScale(5)} />
              <CustomButton
                text={user}
                height={25}
                style={{ opacity: isActive ? 1 : 0.5 }}
                //  paddingHorizontal={scale(-1)}

                bgColor={colors.black10}
                borderColor={colors.primary}
                borderWidth={-1}
                fontWeight={"400"}
                size={10}
                width={scale(buttonWidth || 70)}
                textColor={colors.black}
              />
            </View>
          </View>
        </View>

        <View style={{ ...AppStyles.row, marginRight: scale(15) }}>
          {isRating ? (
            <>
              <View style={AppStyles.row}>
                <Image
                  style={{
                    width: scale(16),
                    height: scale(16),
                    opacity: isActive ? 1 : 0.5,
                  }}
                  resizeMode={"contain"}
                  source={icon.star}
                />
                <Spacer width={verticalScale(5)} />

                <CustomText
                  text={"4.9"}
                  size={14}
                  style={{ opacity: isActive ? 1 : 0.5 }}
                  //   fontFam={Inter.bold}
                  color={colors.black}
                />
              </View>
            </>
          ) : (
            <>
              <Image
                style={{
                  width: scale(35),
                  height: scale(35),
                  opacity: isActive ? 1 : 0.5,
                }}
                resizeMode={"contain"}
                source={icon.passp}
              />
            </>
          )}

          <Spacer width={verticalScale(15)} />
          <Image
            style={{
              width: scale(18),
              height: scale(18),
              opacity: isActive ? 1 : 0.5,
            }}
            resizeMode={"contain"}
            source={icon.nexticon}
          />
        </View>
      </View>

      <View style={{ marginVertical: verticalScale(7) }}>
        <CustomLine />
      </View>

      <View
        style={{
          ...AppStyles.justifyRow,
          paddingHorizontal: scale(10),
          //   paddingVertical: verticalScale(2),
        }}>
        <View style={AppStyles.row}>
          <ToggleSwitch
            isOn={isActive}
            onColor={"#F2F2F2"}
            offColor={"#F2F2F2"}
            size="small"
            style={{ opacity: isActive ? 1 : 0.5 }}
            onToggle={setIsActive}
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

          <CustomText
            text={isActive ? "Active" : "Inactive"}
            size={12}
            style={{ opacity: isActive ? 1 : 0.5 }}
            //   fontWeight={"700"}
            //   fontFam={Inter.bold}
            color={colors.gray}
          />
        </View>

        <View style={AppStyles.row}>
          <CustomButton
            text={"Refer"}
            height={28}
            style={{ opacity: isActive ? 1 : 0.5 }}
            paddingHorizontal={scale(17)}
            bgColor={colors.white}
            borderColor={"#EEEEEE"}
            borderWidth={1}
            fontWeight={"600"}
            size={13}
            fontFam={Inter.semiBold}
            textColor={colors.gray}
          />
          <Spacer width={scale(10)} />

          <CustomButton
            text={"Share"}
            height={28}
            style={{ opacity: isActive ? 1 : 0.5 }}
            paddingHorizontal={scale(17)}
            bgColor={colors.white}
            borderColor={"#EEEEEE"}
            borderWidth={1}
            fontWeight={"600"}
            size={13}
            fontFam={Inter.semiBold}
            textColor={colors.gray}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
  },
});
