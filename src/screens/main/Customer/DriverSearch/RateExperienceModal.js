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
  import CustomInput from "../../../../components/CustomInput";
  import { Spacer } from "../../../../components/Spacer";
  import CustomToggle from "../../../../components/CustomToggle";
  import StarRating from "react-native-star-rating";
  
  const RateExperienceModal = ({
    modalVisible,
    handelModal,
    setModalVisible,
    selectedObject,
    navigation,
    setIsThankyouModal,
  }) => {
    const [selectedDays, setSelectedDays] = useState([]);
  
    console.log("selectedObject", selectedObject);
  
    const ratingCriteria = [
      { title: "Timeliness", active: true, rating: 3 },
      { title: "Communication", active: false, rating: 0 },
      { title: "Accuracy", active: true, rating: 3 },
      { title: "Professionalism", active: false, rating: 0 },
      { title: "Safely", active: false, rating: 0 },
    ];
    //   const customStarImage =
    const CustomStarIcon = () => {
      return (
        <Image
          source={icon.stargrayout} // Replace './customStarIcon.png' with the path to your custom star icon image
          style={{ width: 30, height: 30 }} // Adjust the width and height as needed
          resizeMode="contain"
        />
      );
    };
    const RatingBox = ({ item }) => {
      return (
        <View style={{ ...AppStyles.justifyRow, marginVertical: 8 }}>
          <View style={AppStyles.row}>
            <CustomToggle
              isActive={item.active}
              //   setIsActive={() => {
              //     const updates = [...data];
  
              //     // Toggle the 'active' property of the item at the specified index
              //     updates[index] = {
              //       ...updates[index],
              //       active: !updates[index].active,
              //     };
  
              //     setData(updates);
              //   }}
            />
            <Spacer width={10} />
  
            <NewText
              color={colors.black}
              size={13}
              // fontWeight={"700"}
              text={item.title}
            />
          </View>
          <StarRating
            maxStars={5}
            rating={item.rating}
            fullStarColor={"#FFCA28"}
            emptyStarColor="#CCCCCC"
            starSize={15}
            fullStar={icon.star}
            starStyle={{ marginHorizontal: 2 }} // Add margin between stars
            emptyStar={icon.stargrayout} // Use the CustomStarIcon component as the custom icon renderer
          />
        </View>
      );
    };
    return (
      <Modal
        isVisible={modalVisible}
        onBackdropPress={handelModal}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "95%",
            maxHeight: windowHeight / 1.1,
            backgroundColor: colors.white,
            borderRadius: scale(15),
            alignSelf: "center",
          }}
        >
          <View style={{ ...AppStyles.justifyRow, padding: scale(15) }}>
            <NewText
              color={colors.black}
              size={16}
              fontWeight={"700"}
              text={"Rate Experience"}
            />
  
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              activeOpacity={0.6}
              //   disabled={!onShowPassword}
              style={{ justifyContent: "center", alignItems: "center" }}
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
          </View>
  
          <CustomLine />
          <View style={{ paddingHorizontal: 15 }}>
            <Spacer height={10} />
  
            <CustomInput
              height={29}
              color={colors.gray100}
              editable={false}
              heading={"Title your reivew"}
              value=""
              fontWeight={"600"}
              paddingHorizontal={10}
              rightImageWidth={15}
              rightImageHeight={15}
              placeholder={"What’s most important to know?"}
              borderRadius={8}
            />
            <Spacer height={10} />
            <CustomInput
              height={29}
              color={colors.gray100}
              editable={false}
              heading={"Write your review"}
              value=""
              fontWeight={"600"}
              paddingHorizontal={10}
              rightImageWidth={15}
              rightImageHeight={15}
              placeholder={"What did you like or dislike?"}
              borderRadius={8}
            />
  
            <NewText
              text={"Select only three criteria"}
              color={colors.black}
              style={{ marginVertical: 20 }}
              fontFam={Inter.bold}
              fontWeight="700"
              size={15}
            />
            {ratingCriteria.map((item, index) => {
              return <RatingBox item={item} />;
            })}
  
            <View style={{ marginTop: verticalScale(10) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>
  
            <View style={{ ...AppStyles.justifyRow, marginVertical: 20 }}>
              <Button
                text={"Clear"}
                height={28}
                bgColor={"#EEEEEE"}
                borderColor={"transparent"}
                borderWidth={1}
                onPress={() => setModalVisible(false)}
                size={16}
                borderRadius={7}
                textColor={colors.gray}
                paddingHorizontal={20}
              />
              <Button
                text={"Submit"}
                height={28}
                // onPress={()=>navigation.navigate("ManageOrders")}
                onPress={() => {
                  setModalVisible(false);
                  setTimeout(() => {
                    // setIsThankyouModal(true);
                    navigation.navigate("ManageOrders")
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
  
  export default RateExperienceModal;
  
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
  });
  