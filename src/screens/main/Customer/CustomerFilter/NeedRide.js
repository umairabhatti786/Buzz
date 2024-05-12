import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import DashedLine from "react-native-dashed-line";
import HorizontalContainerToggle from "../../../../components/HorizontalContainerToggle";
import CustomInput from "../../../../components/CustomInput";
import Button from "../../../../components/Button";
import CustomRangeSlider from "../../../../components/RangeSlider";

const NeedRide = ({ navigation }) => {
  const ServiceCoverage = [
    { name: "All (Default)", isActive: true },
    { name: "On Demand", isActive: false },
    { name: "Scheduled", isActive: false },
    { name: "Dedicated", isActive: false },
  ];

  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 100;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);

  const ServiceCoverage1 = [
    { name: "All (Default)", isActive: true },
    { name: "Local", isActive: false },
    { name: "Intercity", isActive: false },
    { name: "Interstate", isActive: false },
  ];
  const VehicleSize = [
    { name: "Standard (2-4 seats)", isActive: true },
    { name: "Large (2-6 seats)", isActive: false },
    { name: "Large (2-6 seats)", isActive: false },
    { name: "+ Premium (Luxury)", isActive: false },
    { name: "Assisted Ride", isActive: false },
  ];

  return (
    <>
      <ScrollView
        style={{ backgroundColor: colors.white }}
        contentContainerStyle={{ backgroundColor: colors.white }}
      >
        <View style={{ backgroundColor: colors.white, padding: 15 }}>
          <Spacer height={5} />
          <NewText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={16}
            style={{ marginVertical: 15 }}
            text={"Service Category"}
          />
          <View style={{ ...AppStyles.box }}>
            <View style={{ paddingHorizontal: scale(15) }}>
              <Spacer height={verticalScale(15)} />
              {ServiceCoverage.map((item, index) => {
                return (
                  <>
                    <HorizontalContainerToggle
                      text={item.name}
                      isActive={item.isActive}
                      setIsActive={() => {}}
                    />
                    {ServiceCoverage.length != index + 1 ? (
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

          <View style={{ ...AppStyles.box, marginTop: 30 }}>
            <View style={{ paddingHorizontal: scale(15) }}>
              <Spacer height={verticalScale(15)} />

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={15}
                style={{ marginBottom: 15 }}
                text={"Pick Up Date and Time"}
              />
              <TouchableOpacity style={styles.pickupDateContainer}>
                <NewText
                  fontWeight="600"
                  color={colors.black}
                  fontFam={Inter.bold}
                  size={16}
                  text={"03-23-24"}
                />

                <Image
                  style={{
                    width: 21,
                    height: 21,
                  }}
                  source={icon.addclendar}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={AppStyles.justifyRow}>
                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(140)}
                  // onShowPassword={()=>setIsVehicleTypeModal(true)}
                  value={"Time: Ex 3:24"}
                  fontWeight={"600"}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(140)}
                  editable={false}
                  // onShowPassword={()=>setIsVehicleTypeModal(true)}
                  rightImage={icon.down}
                  value={"am"}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
              </View>

              <Spacer height={verticalScale(10)} />

              <CustomInput
                height={29}
                color={colors.gray100}
                editable={false}
                heading={"Pick Up within"}
                // onShowPassword={()=>setIsVehicleTypeModal(true)}
                fontWeight={"600"}
                rightImage={icon.down}
                value={"6 Hours"}
                paddingHorizontal={10}
                rightImageWidth={15}
                rightImageHeight={15}
                // placeholder={"$/day"}
                borderRadius={8}
              />

              <View style={{ marginVertical: verticalScale(18) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>
              <View
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  paddingBottom: verticalScale(10),
                }}
              >
                <NewText
                  text={"Add More"}
                  color={colors.gray100}
                  fontFam={Inter.medium}
                  size={15}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{
                    width: scale(22),
                    height: scale(22),
                  }}
                  source={icon.addclendar}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <View style={{ ...AppStyles.box, marginTop: 30 }}>
            <View style={{ padding: scale(15) }}>
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={15}
                text={"Pickup Radius"}
              />
              <View style={{ marginTop: 30, marginBottom: 20 }}>
                <CustomRangeSlider
                  sliderWidth={200}
                  initialValue={20}
                  min={0}
                  max={50}
                  step={100}
                  backgroundColor={colors.primary}
                  minValue={10}
                  maxValue={50}
                  onValueChange={(range) => {
                    console.log("range", range);
                    setMinValue(range.min);
                    setMaxValue(range.max);
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              ...AppStyles.box,
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: scale(15),
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <NewText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={15}
              text={"Stop"}
            />
            <View
              style={{
                ...AppStyles.row,
                alignSelf: "flex-end",
              }}
            >
              <Button
                text={"Single Stop"}
                height={35}
                bgColor={"#12D1AF" + "10"}
                borderColor={colors.primary}
                borderWidth={-1}
                size={15}
                fontWeight={"400"}
                borderRadius={10}
                textColor={colors.primary}
                paddingHorizontal={15}
              />
              <Spacer width={scale(10)} />
              <Button
                text={"Multiple Stop"}
                height={35}
                bgColor={colors.white}
                borderColor={colors.primary}
                borderWidth={-1}
                size={15}
                fontWeight={"400"}
                borderRadius={10}
                textColor={colors.black40}
                paddingHorizontal={15}
              />
            </View>
          </View>

          <NewText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={16}
            style={{ marginTop: 30, marginBottom: 15 }}
            text={"Service Category"}
          />
          <View style={{ ...AppStyles.box }}>
            <View style={{ paddingHorizontal: scale(15) }}>
              <Spacer height={verticalScale(15)} />
              {ServiceCoverage1.map((item, index) => {
                return (
                  <>
                    <HorizontalContainerToggle
                      text={item.name}
                      isActive={item.isActive}
                      setIsActive={() => {}}
                    />
                    {ServiceCoverage1.length != index + 1 ? (
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

          <NewText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={16}
            style={{ marginTop: 30, marginBottom: 15 }}
            text={"Vehicle Size"}
          />
          <View style={{ ...AppStyles.box }}>
            <View style={{ paddingHorizontal: scale(15) }}>
              <Spacer height={verticalScale(15)} />
              {VehicleSize.map((item, index) => {
                return (
                  <>
                    <HorizontalContainerToggle
                      text={item.name}
                      isActive={item.isActive}
                      setIsActive={() => {}}
                    />
                    {VehicleSize.length != index + 1 ? (
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

          <Spacer height={150} />
        </View>
      </ScrollView>
    </>
  );
};

export default NeedRide;

const styles = StyleSheet.create({
  pickupDateContainer: {
    width: "100%",
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black40,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
