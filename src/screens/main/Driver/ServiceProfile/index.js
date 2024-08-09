import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { CustomHeader } from "../../../../components/CustomHeader";
import { Inter } from "../../../../utils/Fonts";
import { AppStyles } from "../../../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import { image } from "../../../../assets/png/images";
import CustomText from "../../../../components/CustomText";
import { icon } from "../../../../assets/png/icons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import CustomButton from "../../../../components/CustomButton";
import NewText from "../../../../components/NewText";
import Collapsible from "react-native-collapsible";
import BottomSheet from "../../../../components/BottomSheet";
import DashedLine from "react-native-dashed-line";
import RenameModal from "../../Customer/CustomerWatchlist/RenameModal";
import DeleteModal from "../../Customer/CustomerWatchlist/DeleteModal";
import AttachmentModal from "../../Customer/CustomerChat/AttachmentModal";

const ServiceProfile = ({ navigation, route }) => {
  const [isOfferedService, setIsOfferedService] = useState(false);
  const [isSavedSearch, setIsSavedSearch] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isRenameModal, setIsRenameModal] = useState(false);
  const [isAttachModal, setIsAttachModal] = useState(false);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const bottomSheetData = [
    {
      name: "Open",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();
      },
    },
    {
      name: "Edit",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();
      },
    },
    {
      name: "Rename",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();

        setTimeout(() => {
          setIsRenameModal(true);
        }, 800);
      },
    },
    {
      name: "Post",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();
      },
    },
    {
      name: "Delete",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();

        setTimeout(() => {
            setIsDeleteModal(true);
        }, 800);
      },
    },
  ];

  const ProfileContainer = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("ServiceProfile")}
        style={{ ...styles.box }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: scale(10),
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>setIsAttachModal(true)}
           style={AppStyles.row}>
            <Image
              style={{
                width: scale(55),
                height: scale(55),
                borderRadius: scale(8),
              }}
              source={image.default_user}
            />

            <View
              style={{
                width: scale(28),
                height: scale(28),
                borderRadius: scale(30),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.gray300,
                position: "absolute",
                bottom: verticalScale(-5),
                left: scale(-8),
                borderWidth: 2.5,
                borderColor: colors.white,
              }}
            >
              <Image
                style={{
                  width: "60%",
                  height: "60%",
                  marginBottom: verticalScale(2),
                }}
                resizeMode="contain"
                source={icon.camera}
              />
            </View>
            <View
              style={{
                paddingLeft: scale(10),
                paddingTop: verticalScale(3),
                gap: verticalScale(2),
              }}
            >
              <CustomText
                text={"Hello,"}
                size={15}
                fontWeight={"600"}
                fontFam={Inter.medium}
                style={{ marginRight: scale(5) }}
                color={colors.gray}
              />

              <NewText
                text={"Will Smith"}
                size={15}
                fontWeight={"600"}
                fontFam={Inter.bold}
                color={colors.black}
              />
            </View>
          </TouchableOpacity>

          <View style={{ ...AppStyles.row, gap: scale(8) }}>
            <Image
              style={{
                width: scale(20),
                height: scale(20),
              }}
              resizeMode="contain"
              source={icon.share}
            />

            <NewText text={"Share"} size={14} color={colors.gray} />
          </View>
        </View>

        <View>
          <CustomLine />
        </View>
        <View style={{ padding: scale(10) }}>
          <CustomButton
            text={"Add New Service"}
            height={verticalScale(30)}
            width={"100%"}
            fontWeight={"600"}
            size={13}
            fontFam={Inter.medium}
            textColor={colors.white}
            bgColor={colors.secondary}
            borderColor={colors.secondary}
            borderWidth={1.5}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const DropContainer = ({
    fontWeight,
    size,
    txt,
    onPress,
    isSetting,
    isActive,
    removeLine,
    internet_image,
    isInternet,
  }) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={{
            ...AppStyles.justifyRow,
            paddingVertical: verticalScale(8),
            paddingHorizontal: scale(15),
          }}
        >
          <View style={{ ...AppStyles.row, gap: scale(10) }}>
            {isInternet && (
              <Image
                style={{ width: scale(18), height: scale(18) }}
                source={internet_image || icon.internet}
                resizeMode={"contain"}
              />
            )}

            <NewText
              fontWeight={"500"}
              color={colors.black}
              text={txt}
              size={16}
            />
          </View>

          <Spacer width={scale(10)} />
          {isSetting ? (
            <Image
              style={{ width: scale(20), height: scale(20) }}
              source={icon.dots}
              resizeMode={"contain"}
            />
          ) : (
            <Image
              style={{ width: scale(13), height: scale(13) }}
              source={isActive ? icon.up : icon.down}
              resizeMode={"contain"}
            />
          )}
        </TouchableOpacity>

        {!removeLine && (
          <View style={{ paddingVertical: verticalScale(8) }}>
            <CustomLine />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        statusBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <CustomHeader label={"Service Profile"} navigation={navigation} />

        <ScrollView>
          <View style={{ padding: scale(15) }}>
            <ProfileContainer />

            <View
              style={{
                ...AppStyles.justifyRow,
                paddingVertical: verticalScale(30),
              }}
            >
              <View style={styles.amountContainer}>
                <CustomText
                  text={"100"}
                  size={22}
                  fontWeight={"bold"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <CustomText text={"Views"} size={12} color={colors.gray} />
              </View>

              <CustomLine height={verticalScale(50)} width={1} />

              <View style={styles.amountContainer}>
                <CustomText
                  text={"10"}
                  size={22}
                  fontWeight={"bold"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <CustomText text={"Saved"} size={12} color={colors.gray} />
              </View>

              <CustomLine height={verticalScale(50)} width={1} />

              <View style={styles.amountContainer}>
                <CustomText
                  text={"4.8"}
                  size={22}
                  fontWeight={"bold"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <CustomText text={"Ratings"} size={12} color={colors.gray} />
              </View>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsOfferedService(!isOfferedService)}
                style={{
                  ...AppStyles.justifyRow,
                  //   paddingTop: verticalScale(35),
                }}
              >
                <CustomText
                  text={"Offered Service"}
                  size={14}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={isOfferedService == true ? icon.down : icon.up}
                />
              </TouchableOpacity>
              <Collapsible collapsed={isOfferedService}>
                <View
                  style={{
                    ...AppStyles.box,
                    paddingTop: 10,
                    marginTop: 15,
                  }}
                >
                  <DropContainer
                    size={15}
                    isInternet
                    // onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                    txt={"Delivery (main)"}
                    isSetting
                  />

                  <DropContainer
                    size={15}
                    isInternet
                    fontWeight={"500"}
                    //   onPress={() => bottomSheetModalRef.current.present()}
                    txt={"Furniture Deliver"}
                    isSetting
                  />

                  <DropContainer
                    size={15}
                    fontWeight={"500"}
                    isInternet
                    //   onPress={() => bottomSheetModalRef.current.present()}
                    txt={"Installation/Dismantling"}
                    isSetting
                  />
                  <DropContainer
                    size={15}
                    isInternet
                    fontWeight={"500"}
                    internet_image={icon.no_internet}
                    removeLine={true}
                    //   onPress={() => bottomSheetModalRef.current.present()}
                    txt={"Piano Delivery"}
                    isSetting
                  />

                  <View style={{ paddingBottom: 10 }} />
                </View>
              </Collapsible>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsSavedSearch(!isSavedSearch)}
                style={{
                  ...AppStyles.justifyRow,
                  paddingTop: verticalScale(25),
                }}
              >
                <CustomText
                  text={"Saved Search"}
                  size={14}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={isSavedSearch == true ? icon.down : icon.up}
                />
              </TouchableOpacity>
              <Collapsible collapsed={isSavedSearch}>
                <View
                  style={{
                    ...AppStyles.box,
                    paddingTop: 10,
                    marginTop: 15,
                  }}
                >
                  <DropContainer
                    size={15}
                    onPress={() => bottomSheetModalRef.current.present()}
                    // onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                    txt={"Ride"}
                    isSetting
                  />

                  <DropContainer
                    size={15}
                    removeLine
                    fontWeight={"500"}
                    onPress={() => bottomSheetModalRef.current.present()}
                    txt={"Furniture Deliver"}
                    isSetting
                  />

                  <View style={{ paddingBottom: 10 }} />
                </View>
              </Collapsible>
            </View>
          </View>
        </ScrollView>
      </Screen>

      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <View style={{ paddingHorizontal: 15 }}>
          {bottomSheetData.map((item, index) => {
            return (
              <TouchableOpacity onPress={item.onPress} activeOpacity={0.6}>
                <NewText
                  color={item.name == "Delete" ? colors.red : colors.gray200}
                  style={{ textAlign: "center", marginTop: verticalScale(15) }}
                  size={16}
                  text={item?.name}
                />
                <View style={{ paddingTop: verticalScale(15) }}>
                  <DashedLine
                    style={{ width: "100%" }}
                    dashLength={3}
                    dashThickness={1}
                    dashGap={3}
                    dashColor={colors.gray}
                  />
                </View>
              </TouchableOpacity>
            );
          })}

          {/* <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setTimeout(() => {
                setIsEditModal(true);
              }, 800);
            }}
            activeOpacity={0.6}
            style={{ paddingVertical: 20 }}
          >
            <NewText
              color={colors.gray200}
              style={{ textAlign: "center" }}
              size={16}
              text={"Edit"}
            />
            <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
              <DashedLine
                style={{ width: "100%" }}
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor={colors.gray}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setTimeout(() => {
                setIsRenameModal(true);
              }, 800);
            }}
            activeOpacity={0.6}
            style={{ paddingBottom: 20 }}
          >
            <NewText
              color={colors.gray200}
              style={{ textAlign: "center" }}
              size={16}
              text={"Rename"}
            />
            <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
              <DashedLine
                style={{ width: "100%" }}
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor={colors.gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setIsDeleteModal(true);
            }}
            activeOpacity={0.6}
            style={{ paddingTop: 10 }}
          >
            <NewText
              color={colors.red}
              style={{ textAlign: "center" }}
              size={16}
              text={"Delete"}
            />
          </TouchableOpacity> */}
        </View>
      </BottomSheet>

      <RenameModal
        mainColor={colors.primary}
        setModalVisible={setIsRenameModal}
        modalVisible={isRenameModal}
        title={"Rename"}
        onSubmit={() => {
          setIsRenameModal(false);
        }}
        navigation={navigation}
      />

<DeleteModal
        modalVisible={isDeleteModal}
        setModalVisible={setIsDeleteModal}
        onYes={() => {
          setIsDeleteModal(false);
        //   setTimeout(() => {
        //     setIsSuccessModal(true);
        //   }, 500);
        }}
      />
       <AttachmentModal
        modalVisible={isAttachModal}
        title={"Change Profile Picture"}
        subtitle_image={image.upload_photo}
        subtitle1={"Upload From Photos"}
        subtitle2={"Capture Photo"}
        setModalVisible={setIsAttachModal}
      />
    </>
  );
};

export default ServiceProfile;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
  },
  amountContainer: { width: "30%", alignItems: "center" },
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
});
