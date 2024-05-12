import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { CustomHeader } from "../../../../components/CustomHeader";
import { Spacer } from "../../../../components/Spacer";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import CustomInput from "../../../../components/CustomInput";
import { windowWidth } from "../../../../utils/Commons";
import Button from "../../../../components/Button";
import Days from "../../../../components/Days";
const DedicatedService = ({ navigation, route }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  console.log("selectedDays",selectedDays)

  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        statusBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <CustomHeader label={"Profile View"} navigation={navigation} />
        <ScrollView
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <NewText
            text={"Select Possible Service Days"}
            color={colors.black}
            fontFam={Inter.bold}
            fontWeight="700"
            size={16}
          />
          <View style={{ ...AppStyles.justifyRow, marginVertical: 15 }}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((item, index) => {
              return (
                <Days
                  day={item}
                  selectedDays={selectedDays}
                  onPress={() => {
                    let daysData = [...selectedDays];
                    let find = daysData.findIndex((it) => it === item); // Fix the syntax here
                    
                    if (find === -1) {
                      // If the item is not found in the selectedDays array, add it
                      daysData.push(item);
                    } else {
                      // If the item is already selected, remove it
                      daysData = daysData.filter((it) => it !== item);
                    }
                    
                    // Update the selectedDays state
                    setSelectedDays(daysData);
                
                  }}
                />
              );
            })}
          </View>

          <View style={{ marginVertical: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
            <NewText
              text={"Number of Days / Week"}
              color={colors.gray200}
              fontFam={Inter.bold}
              // fontWeight="00"
              size={16}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
              }}
            >
              <TextInput
                value="4"
                style={{
                  color: colors.black,
                  fontFamily: "700",
                  fontSize: 16,
                  fontFamily: Inter.bold,
                  height: 48,
                }}
              />
              <NewText
                text={"days"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
            <NewText
              text={"Length of Service"}
              color={colors.gray200}
              fontFam={Inter.bold}
              // fontWeight="00"
              size={16}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
              }}
            >
              <TextInput
                value="16"
                style={{
                  color: colors.black,
                  fontFamily: "700",
                  fontSize: 16,
                  fontFamily: Inter.bold,
                  height: 48,
                }}
              />
              <NewText
                text={"weeks"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ marginVertical: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <HorizontalContainer
            text={"Cost Per Day"}
            color={colors.gray200}
            weight={"500"}
            size={16}
            size1={18}
            color1={colors.black}
            weight1={"400"}
            text1={"$100/day"}
          />
          <View style={{ marginVertical: 20 }}>
            <HorizontalContainer
              text={"Total Cost"}
              color={colors.gray200}
              weight={"500"}
              size={16}
              size1={18}
              color1={colors.black}
              weight1={"400"}
              text1={"$6400"}
            />
          </View>

          <View style={{ marginBottom: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <View style={AppStyles.justifyRow}>
            <NewText
              text={"Payment Options"}
              color={colors.gray200}
              size={16}
            />
            <CustomInput
              height={29}
              headingSize={14}
              color={colors.gray100}
              width={windowWidth / 2.7}
              editable={false}
              heading={""}
              headingWeight={"500"}
              // onShowPassword={() => setIsXLargeModal(true)}
              rightImage={icon.down}
              value={"Pay weekly"}
              fontWeight={"600"}
              paddingHorizontal={10}
              rightImageWidth={15}
              rightImageHeight={15}
              // placeholder={"$/day"}
              borderRadius={8}
            />
          </View>

          <NewText
            text={
              "Note: Your mover wil be paid for only completed service every Monday."
            }
            color={colors.gray}
            style={{ marginVertical: 15 }}
            fontWeight={"400"}
            lineHeight={25}
            size={16}
          />

          <View style={{ marginBottom: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>
          <View style={{ marginBottom: verticalScale(30), marginTop: 20 }}>
            <HorizontalContainer
              text={"Due Today"}
              color={colors.gray200}
              weight={"500"}
              size={16}
              size1={18}
              color1={colors.black}
              weight1={"500"}
              text1={"$400"}
            />
          </View>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 80,
            width: "100%",
            backgroundColor: colors.white,
            elevation: 5,
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            paddingHorizontal: 15,
            ...AppStyles.justifyRow,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              ...AppStyles.row,
              //   marginTop: 15,
            }}
          >
            <Button
              text={"Clear"}
              height={33}
              bgColor={"#EEEEEE"}
              borderColor={"transparent"}
              borderWidth={1}
              size={16}
              borderRadius={10}
              textColor={colors.gray}
              paddingHorizontal={20}
            />
            <Spacer width={scale(10)} />

            <Button
              text={"Preview"}
              height={33}
              bgColor={"#EEEEEE"}
              borderColor={"transparent"}
              borderWidth={1}
              size={16}
              borderRadius={10}
              textColor={colors.gray}
              paddingHorizontal={20}
            />
          </View>
          <Button
            text={"Confirmed"}
            height={33}
            onPress={()=>navigation.navigate("ManageOrders")}
            bgColor={colors.primary}
            borderColor={"transparent"}
            borderWidth={1}
            size={16}
            borderRadius={10}
            textColor={colors.white}
            paddingHorizontal={20}
          />
        </View>
      </Screen>
    </>
  );
};

export default DedicatedService;

const styles = StyleSheet.create({
  daysContainer: {
    width: 100,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: 10,
  },
});
