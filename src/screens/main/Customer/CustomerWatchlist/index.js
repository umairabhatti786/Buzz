import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { CustomHeader } from "../../../../components/CustomHeader";
import NewText from "../../../../components/NewText";
import { colors } from "../../../../utils/colors";
import { Inter } from "../../../../utils/Fonts";
import { AppStyles } from "../../../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import { icon } from "../../../../assets/png/icons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import Collapsible from "react-native-collapsible";
import { image } from "../../../../assets/png/images";
import CustomerTicket from "../../../../components/CustomerTicket";
import CustomTicket from "../../../../components/CustomTicket";
import DashedLine from "react-native-dashed-line";
import Button from "../../../../components/Button";
import BottomSheet from "../../../../components/BottomSheet";
import DeleteModal from "./DeleteModal";
import SuccessModal from "./SuccessModal";
import EditModal from "./EditModal";
import RenameModal from "./RenameModal";

const CustomerWatchlist = ({ navigation, isActive }) => {
  const [showLocalDelivery, setShowLocalDelivery] = useState(true);
  const bottomSheetModalRef = useRef(null);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isRenameModal, setIsRenameModal] = useState(false);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const [customerTicketData, setCustomerTicketData] = useState([
    {
      img: image.defimg900,
      name: "Will Smith",
      active: "Available",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
      isOpen: true,
      id: 1,
      isWatchlist: true,
    },
    // {
    //   img: image.defimg600,
    //   name: "Kadin Botosh",
    //   active: "Busy",
    //   distance: "15 mil",
    //   time: "15 Min Away",
    //   vehicle: "Cargo-van",
    //   isOpen: false,
    //   id: 2,
    //   isWatchlist: true,
    // },
  ])

  const DropContainer = ({
    fontWeight,
    size,
    txt,
    onPress,
    isSetting,
    isActive,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          ...AppStyles.justifyRow,
          paddingVertical: verticalScale(10),

          // paddingRight: scale(5),
        }}
      >
        <NewText
          fontWeight={fontWeight || "700"}
          color={colors.black}
          fontFam={Inter.bold}
          text={txt || "Favorites Movers"}
          size={size || 16}
        />

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
    );
  };

  return (
    <>
      <Screen
        backgroundColor={colors.white}
        statusBarColor={colors.white}
        topBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <Spacer height={Platform.OS == "ios" ? 10 : 20} />
        <NewText
          fontWeight="700"
          color={colors.black}
          fontFam={Inter.bold}
          size={20}
          style={{ marginLeft: 15 }}
          text={"Watch List"}
        />
        <Spacer height={5} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: colors.white }}
          contentContainerStyle={colors.white}
        >
          <View style={{ padding: 15 }}>
          <NewText
          fontWeight={"700"}
          color={colors.black}
          fontFam={Inter.bold}
          text={"Favorites Movers"}
          size={16}
        />

            <View
              style={{
                ...AppStyles.box,
                paddingHorizontal: 15,
                paddingTop: 10,
                marginTop: 15,
              }}
            >
              <View>
                <DropContainer
                  size={15}
                  onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  txt={"Local Delivery"}
                />
                {!showLocalDelivery && (
                  <View style={{ paddingVertical: 10 }}>
                    <CustomLine />
                  </View>
                )}

                <Collapsible collapsed={showLocalDelivery}>
                  {customerTicketData.map((item, index) => {
                    return (
                      <>
                        <View >
                          <CustomTicket
                            backgroundColor={colors.white}
                            isNoShadow={true}
                            navigation={navigation}
                            item={item}
                            onWatchList={()=>{
                              const updatedData = customerTicketData.map(it => {
                                if (it.id === item.id) {
                                  return { ...item, isWatchlist: !item.isWatchlist };
                                }
                                return item;
                              });
                              setCustomerTicketData(updatedData);
                              

                            }}
                          />
                        </View>

                   
                          {customerTicketData.length - 1 !== index && (
                            <View style={{marginTop:10}}>
                                                          <CustomLine />


                            </View>
                          ) }
                      </>
                    );
                  })}
                </Collapsible>
              </View>

              <View style={{ paddingVertical: 10 }}>
                <CustomLine />
              </View>

              

              <DropContainer
                size={15}
                fontWeight={"500"}
                txt={"Furniture Delivery"}
              />

              <View style={{ paddingVertical: 10 }}>
                <CustomLine />
              </View>

              <DropContainer size={15} fontWeight={"500"} txt={"Need a Ride"} />

              <View style={{ paddingBottom: 10 }} />
            </View>
            <View style={{ marginTop: 20 }}>
            <NewText
          fontWeight={"700"}
          color={colors.black}
          fontFam={Inter.bold}
          text={ "Saved Search"}
          size={16}
        />

              <View
                style={{
                  ...AppStyles.box,
                  paddingHorizontal: 15,
                  paddingTop: 10,
                  marginTop: 15,
                }}
              >
                <DropContainer
                  size={15}
                  // onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  txt={"Ride"}
                  onPress={() => bottomSheetModalRef.current.present()}
                  isSetting
                />

                <View style={{ paddingVertical: 10 }}>
                  <CustomLine />
                </View>

                <DropContainer
                  size={15}
                  fontWeight={"500"}
                  onPress={() => bottomSheetModalRef.current.present()}
                  txt={"Furniture Deliver"}
                  isSetting
                />

                <View style={{ paddingBottom: 10 }} />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
            <NewText
          fontWeight={"700"}
          color={colors.black}
          fontFam={Inter.bold}
          text={"Posts"}
          size={16}
        />

              <View
                style={{
                  ...AppStyles.box,
                  paddingHorizontal: 15,
                  paddingTop: 10,
                  marginTop: 15,
                }}
              >
                <DropContainer
                  size={15}
                  // onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  onPress={() => bottomSheetModalRef.current.present()}
                  txt={"06 Mar 2024"}
                  isSetting
                />

                <View style={{ paddingVertical: 10 }}>
                  <CustomLine />
                </View>

                <DropContainer
                  size={15}
                  fontWeight={"500"}
                  txt={"28 Feb 2024"}
                  onPress={() => bottomSheetModalRef.current.present()}
                  isSetting
                />

                <View style={{ paddingBottom: 10 }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </Screen>

      <BottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
      >
        <View style={{ paddingHorizontal: 15 }}>
          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              navigation.navigate("CustomerFilter");
            }}
            activeOpacity={0.6}
          >
            <NewText
              color={colors.gray200}
              style={{ paddingBottom: 12, textAlign: "center" }}
              size={16}
              text={"Open"}
            />
            <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
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
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <DeleteModal
        modalVisible={isDeleteModal}
        setModalVisible={setIsDeleteModal}
        onYes={() => {
          setIsDeleteModal(false);
          setTimeout(() => {
            setIsSuccessModal(true);
          }, 500);
        }}
      />
      <SuccessModal
        modalVisible={isSuccessModal}
        setModalVisible={setIsSuccessModal}
        onReturnHome={() => {
          setIsSuccessModal(false);
          setTimeout(() => {
            navigation.navigate("Home");
          }, 500);
        }}
      />

      <EditModal
        mainColor={colors.primary}
        setModalVisible={setIsEditModal}
        modalVisible={isEditModal}
        title={"Edit"}
        onSubmit={()=>{
          setIsEditModal(false)
          setTimeout(() => {
            setIsSuccessModal(true)
            
          }, 500);

        }}
        navigation={navigation}
      />
      <RenameModal
        mainColor={colors.primary}
        setModalVisible={setIsRenameModal}
        modalVisible={isRenameModal}
        title={"Rename"}
        onSubmit={()=>{
          setIsRenameModal(false)
          setTimeout(() => {
            setIsSuccessModal(true)
            
          }, 500);

        }}
        navigation={navigation}
      />
    </>
  );
};

export default CustomerWatchlist;

const styles = StyleSheet.create({});
