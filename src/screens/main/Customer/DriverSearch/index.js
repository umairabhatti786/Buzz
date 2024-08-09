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
import React, { useState, useEffect, useRef } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import { Inter } from "../../../../utils/Fonts";
import CustomInput from "../../../../components/CustomInput";
import { Spacer } from "../../../../components/Spacer";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import DropDown from "../../../../components/DropDown";
import { icon } from "../../../../assets/png/icons";
import CustomerTicket from "../../../../components/CustomerTicket";
import { image } from "../../../../assets/png/images";
import * as Animatable from "react-native-animatable";
import NewText from "../../../../components/NewText";
import CounterOfferModal from "./CounterOfferModal";
import SortedModal from "./SortedModal";
import ViewModal from "./ViewModal";
import VehicleModal from "./VehicleModal";
import TravelModel from "./TravelModel";
import PaymentMethodModal from "./PaymentMethodModal";
import AddPaymentMethodModal from "./AddPaymentMethodModal";
import ThankyouModal from "./ThankyouModal";
import RateExperienceModal from "./RateExperienceModal";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import DriverDetailSheet from "./DriverDetailSheet";
import CategoryModal from "./CategoryModal";
import SuccessModal from "../../../../components/SuccessModal";
import PickupDropInstructionModal from "./PickupDropInstructionModal";

const DriverSearch = ({ navigation, route }) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const [watchListObject, setWatchListObject] = useState([]);
  const [isCounterOfferVisible, setIsCounterOfferVisible] = useState(false);
  const [isSortedVisible, setIsSortedVisible] = useState(false);
  const [sortedObject, setSortedObject] = useState("Default (Relevance)");
  const [viewObject, setViewObject] = useState("List View");
  const [vehicleObject, setVehicleObject] = useState("Vehicle Size");
  const [isVehicleVisible, setIsVehicleVisible] = useState(false);
  const [deliveryType, setDelivertype] = useState("Dedicated");
  const [isSubmitModal, setIsSubmitModal] = useState(false);
  const [mapHeight, setMapHeight] = useState(400);
  // const [isPredictionList, setIsPredictionList] = useState(false);

  const nearby = route?.params?.nearBy;
  console.log("nearbynearby", nearby);
  // const [predictionData, setPredictionData] = useState([]);


  const [categoryObject, setCategoryObject] = useState("Delivery");
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isTravelVisible, setIsTravelVisible] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [isRateExperienceModal, setIsRateExperienceModal] = useState(false);
  const [mapType, setMapType] = useState("standard");
  const [region, setRegion] = useState({
    latitude: 32.3363,
    longitude: 74.3675,
    latitudeDelta: 0.039330183268125069,
    longitudeDelta: 0.045962757229776571,
  });
  const mapRef = useRef(null);
  let long = 74.3675;
  let lat = 32.3363;

  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isAddPaymentMethodVisible, steIsAddPaymentMethodVisible] =
    useState(false);
  const [isThankyouModal, setIsThankyouModal] = useState(false);
  const [isPickupDropInstructionModal,setIsPickupDropInstructionModal]=useState(false)
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const driverDetailSheetRef = useRef();

  const [saveText, setSaveText] = useState("");
  const [watchlistDescription, setWatchlistDescription] =
    useState("See Watchlist");

  console.log("setSelectedDrivers", selectedDrivers);
  const [dropPoints, setdropPoints] = useState([
    {
      dropFromAddress: nearby ? nearby : "Town Hall, New York",
      dropOffAddress: "",
      dropOffPlaceHolder: "Drop Off Address",
    },
  ]);

  const customerTicketData = [
    {
      img: image.defimg900,
      name: "Will Smith",
      active: "Available",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
      isOpen: true,
      lat: 32.3463,
      long: 74.3775,
      id: 1,
    },
    {
      img: image.defimg900,
      name: "Will Smith",
      active: "Available",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
      isOpen: true,
      lat: 32.3663,
      long: 74.3875,
      id: 2,
    },
    {
      img: image.defimg600,
      name: "Kadin Botosh",
      active: "Busy",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Cargo-van",
      isOpen: true,
      lat: 32.3373,
      long: 74.3685,
      id: 3,
    },
    {
      img: image.defimg700,
      name: "Will Smith",
      active: "On Schedule",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
      isOpen: true,
      lat: 32.3393,
      long: 74.3775,
      id: 4,
    },
    {
      img: image.defimg700,
      name: "Will Smith",
      active: "Inactive",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
      isOpen: true,
      lat: 32.3563,
      long: 74.3695,
      id: 5,
    },

    {
      img: image.defimg700,
      name: "Will Smith",
      active: "On Schedule",
      distance: "15 mil",
      time: "15 Min Away",
      vehicle: "Car",
      isOpen: true,
      lat: 32.3163,
      long: 74.3695,
      id: 6,
    },
  ];

  // useEffect(() => {

  //   setTimeout(() => {
  //     setIsWatchList(!isWatchList)

  //   }, 2000);
  // }, [isWatchList])

  const renderCustomerUser = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(10),
          }}
        >
          <CustomerTicket
            setDelivertype={setDelivertype}
            onBook={() => {
              if (deliveryType != "Dedicated") {
                setIsPaymentModal(true);
              } else {
                navigation.navigate("DedicatedService");
              }
            }}
            // onBook={() => navigation.navigate("DedicatedService")}
            onPressProfile={() =>
              navigation.navigate("CustomerProfile", { data: item })
            }
            item={item}
            onCounterOffer={() => setIsCounterOfferVisible(true)}
            setIsWatchList={setIsWatchList}
            setWatchListObject={setWatchListObject}
            watchListObject={watchListObject}
            onWatchList={() => {
              setSaveText("Saved, you can see your saved Driver in Watchlist");
              setIsWatchList(true);
              const findObject = watchListObject?.find((e) => e.id == item.id);
              if (findObject) {
                const dataContact1 = watchListObject.filter(
                  (f) => f.id != item.id
                );

                setWatchListObject(dataContact1);
                setWatchlistDescription("Removed from Watchlist");
              } else {
                setWatchlistDescription("See Watchlist");

                const dataContact = [...watchListObject, item]; // Replace 'New Data' with your actual data
                setWatchListObject(dataContact);
              }
              setTimeout(() => {
                setIsWatchList(false);
              }, 4000);
              // setWatchListObject(item)
            }}
            // onPress={() =>
            //   navigation.navigate("TrackOrder", { orderData: item })
            // }
          />
        </View>
      </>
    );
  };

  const renderMapViewDriver = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(10),
          }}
        >
          <CustomerTicket
            // onBook={()s => setIsPaymentModal(true)}
            // onBook={() => navigation.navigate("DedicatedService")}
            disableCollapsible={true}
            onPressProfile={() =>
              navigation.navigate("CustomerProfile", { data: item })
            }
            item={item}
            onCounterOffer={() => {
              // driverDetailSheetRef.current.dismiss()

              setIsCounterOfferVisible(true);
            }}
            setIsWatchList={setIsWatchList}
            setWatchListObject={setWatchListObject}
            watchListObject={watchListObject}
            onBook={() => {
              if (deliveryType != "Dedicated") {
                setIsPaymentModal(true);
              } else {
                navigation.navigate("DedicatedService");
              }
            }}
            // onWatchList={() => {
            //   setSaveText("Saved, you can see your saved Driver in Watchlist");
            //   setIsWatchList(true);
            //   const findObject = watchListObject?.find((e) => e.id == item.id);
            //   if (findObject) {
            //     const dataContact1 = watchListObject.filter(
            //       (f) => f.id != item.id
            //     );

            //     setWatchListObject(dataContact1);
            //   } else {
            //     const dataContact = [...watchListObject, item]; // Replace 'New Data' with your actual data
            //     setWatchListObject(dataContact);
            //   }
            //   setTimeout(() => {
            //     setIsWatchList(false);
            //   }, 2000);
            //   // setWatchListObject(item)
            // }}
            onPress={() => {
              driverDetailSheetRef.current.present();
            }}
          />
        </View>
      </>
    );
  };

  const updateMapCenter = (index) => {
    try {
      if (mapRef) {
        mapRef.current.animateToRegion(
          {
            latitude: 32.3363,
            longitude: 74.3675,
            latitudeDelta: 0.039330183268125069,
            longitudeDelta: 0.045962757229776571,
          },

          1000
        );
      }
    } catch (error) {
      console.log("updateMapCenter", error);
    }
  };

  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        statusBarColor={colors.white}
        // topBarColor={colors.primary}
        barStyle={"dark-content"}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: colors.white,
          }}
        >
          <View
            style={{
              ...AppStyles.justifyRow,
              backgroundColor: colors.white,
              paddingVertical: verticalScale(13),
              paddingHorizontal: scale(15),
              elevation: 5,
              shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
              shadowOffset: { width: 4, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <TouchableOpacity
              style={{ width: "33%" }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: scale(15), height: scale(15) }}
                resizeMode="contain"
                source={icon.back}
              />
            </TouchableOpacity>
            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              text={"Search for Driver"}
            />
            <View style={{ width: "33%" }} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
              }}
            >
              <View style={{ paddingTop: verticalScale(10) }}>
                <CustomInput
                  leftImage={icon.location}
                  value={nearby ? nearby : "Town Hall, New York"}
                />
              </View>
              {dropPoints.map((item, index) => {
                return (
                  <>
                    <View style={{ paddingTop: verticalScale(10) }}>
                                            <CustomInput
                        leftImage={icon.location}
                        placeholder={item.dropOffPlaceHolder}
                        value={item.dropOffAddress}
                      />
                    </View>
                  </>
                );
              })}

              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  let data = [...dropPoints];
                  data.push({
                    dropOffPlaceHolder: "Drop  Off Address",
                    dropOffAddress: "",
                  });

                  setdropPoints(data);
                }}
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  paddingVertical: verticalScale(10),
                }}
              >
                <CustomText
                  text={"Add more drop point"}
                  color={colors.gray100}
                  fontWeight="500"
                  fontFam={Inter.medium}
                  size={14}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{
                    width: scale(22),
                    height: scale(22),
                    // tintColor: index > 0 ? colors.black : colors.white,
                  }}
                  source={icon.addlocation}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <CustomText
                text={"----------------------------------------------"}
                color={colors.gray100}
                fontWeight="300"
                style={{ width: "100%" }}
                size={14}
              />

              <View
                style={{
                  ...AppStyles.justifyRow,
                  marginTop: verticalScale(5),
                  marginBottom: verticalScale(25),
                }}
              >
                <CustomText
                  text={"Total Distance: 10 Miless"}
                  color={"#666666"}
                  fontWeight="400"
                  size={12}
                />
                <CustomText
                  text={"Total Time: 01:12 hr"}
                  color={"#666666"}
                  fontWeight="400"
                  size={12}
                />
              </View>
              <CustomLine />
              <Spacer height={verticalScale(15)} />

              <View style={AppStyles.justifyRow}>
                <View style={AppStyles.row}>
                  <NewText
                    text={"Sort By"}
                    color={colors.black}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={16}
                  />
                  <Spacer width={scale(10)} />

                  <CustomInput
                    height={29}
                    dropDown={true}
                    color={colors.gray100}
                    width={scale(100)}
                    editable={false}
                    value={sortedObject}
                    onShowPassword={() => setIsSortedVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
                <View style={AppStyles.row}>
                  <NewText
                    text={"View"}
                    color={colors.black}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={16}
                  />
                  <Spacer width={scale(10)} />
                  <CustomInput
                    dropDown={true}
                    height={29}
                    color={colors.gray100}
                    width={scale(100)}
                    editable={false}
                    value={viewObject}
                    onShowPassword={() => setIsViewVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
              </View>

              <Spacer height={scale(15)} />
              <CustomLine />

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setSaveText(
                    "Saved. You can view your saved search in watchlist."
                  );
                  setIsWatchList(true);

                  setTimeout(() => {
                    setIsWatchList(false);
                  }, 3000);
                }}
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  marginTop: verticalScale(12),
                  marginBottom: verticalScale(20),
                }}
              >
                <CustomText
                  text={"Save Search"}
                  color={colors.primary}
                  fontWeight="500"
                  fontFam={Inter.medium}
                  size={13}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{
                    width: scale(19),
                    height: scale(19),
                    tintColor:  watchListObject?.find((e) => e.id)?colors.primary:  colors.gray100,
                  }}
                  source={icon.watchlist}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={AppStyles.justifyRow}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate("CustomerFilter")}
                  style={AppStyles.row}
                >
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                    }}
                    source={icon.filter}
                    resizeMode="contain"
                  />
                  <Spacer width={scale(10)} />

                  <NewText
                    text={"Customize/Filters"}
                    color={colors.black}
                    fontFam={Inter.bold}
                    fontWeight="700"
                    size={17}
                  />
                </TouchableOpacity>
                <View style={AppStyles.row}>
                  <NewText
                    text={"Clear All"}
                    color={colors.gray}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={14}
                  />
                </View>
              </View>
            </View>
            <View style={{ ...AppStyles.row, height: verticalScale(60) }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginRight: scale(10), marginLeft: scale(15) }}>
                  <CustomInput
                    height={29}
                    dropDown={true}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={categoryObject}
                    onShowPassword={() => setIsCategoryVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <CustomInput
                    dropDown={true}
                    height={29}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={vehicleObject}
                    onShowPassword={() => setIsVehicleVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <CustomInput
                    height={29}
                    dropDown={true}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={"Travel Distance"}
                    onShowPassword={() => setIsTravelVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
              </ScrollView>
            </View>
            <View style={{ paddingBottom: scale(15) }}>
              {viewObject == "Map View" && (
                <View
                  style={{
                    width: "100%",
                    height: mapHeight,
                    alignSelf: "center",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: "90%",
                      height: "90%",
                      alignSelf: "center",
                      borderRadius: 20,
                    }}
                  >
                    <MapView.Animated
                      zoomControlEnabled={false}
                      ref={mapRef}
                      mapType={mapType}
                      showsBuildings={true}
                      showsCompass={false}
                      toolbarEnabled={false}
                      // initialRegion={region}
                      region={region}
                      // provider={PROVIDER_GOOGLE}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: 5,
                        borderRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      {customerTicketData.map((item, index) => {
                        return (
                          <Marker
                            onPress={() => setSelectedDrivers([item])}
                            // style={{width:30,height:30,alignItems:"center",justifyContent:"center",}}

                            key={index}
                            coordinate={{
                              latitude: item.lat,
                              longitude: item.long,
                            }}
                            // identifier={index.toString()}
                          >
                            <TouchableOpacity
                              style={{
                                width:
                                  selectedDrivers[0]?.id == item?.id ? 18 : 12,
                                height:
                                  selectedDrivers[0]?.id == item?.id ? 18 : 12,
                                borderRadius: 999,
                                backgroundColor:
                                  item.active == "On Schedule"
                                    ? colors.yellow
                                    : item.active == "Busy"
                                    ? colors.red
                                    : item.active == "Inactive"
                                    ? colors.gray
                                    : item?.active == "Available"
                                    ? colors.primary
                                    : colors.gray,
                              }}
                            ></TouchableOpacity>
                            {/* <StoreMarker /> */}
                          </Marker>
                        );
                      })}
                    </MapView.Animated>

                    <View
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          if (mapType == "standard") {
                            setMapType("satellite");
                          } else {
                            setMapType("standard");
                          }
                        }}
                        activeOpacity={0.6}
                      >
                        <Image
                          style={styles.mapImgContainer}
                          // resizeMode="contain"
                          source={image.layers}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}>
                        <Image
                          style={styles.mapImgContainer}
                          // resizeMode="contain"
                          source={image.gesture}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => updateMapCenter()}
                      >
                        <Image
                          style={styles.mapImgContainer}
                          // resizeMode="contain"
                          source={image.routes}
                        />
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        if (mapHeight == 400) {
                          setMapHeight(700);
                        } else {
                          setMapHeight(400);
                        }
                      }}
                      style={{
                        position: "absolute",
                        bottom: 80,
                        right: 20,
                        gap: 10,
                      }}
                    >
                      <Image
                        style={styles.mapImgContainer}
                        // resizeMode="contain"
                        source={mapHeight == 400 ? image.zoom : icon.reduce}
                      />
                    </TouchableOpacity>
                  </View>

                  {viewObject == "Map View" && (
                    <View style={{ position: "absolute", bottom: -15 }}>
                      <FlatList
                        data={selectedDrivers}
                        style={{ paddingBottom: verticalScale(30) }}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                          gap: verticalScale(5),
                          paddingBottom: 10,
                        }}
                        keyExtractor={(item) => item}
                        renderItem={renderMapViewDriver}
                      />
                    </View>
                  )}
                </View>
              )}
              {viewObject == "List View" && (
                <>
                  <FlatList
                    data={customerTicketData}
                    style={{ paddingBottom: verticalScale(30) }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      gap: verticalScale(5),
                      paddingBottom: 10,
                    }}
                    keyExtractor={(item) => item}
                    renderItem={renderCustomerUser}
                  />
                </>
              )}
            </View>
          </ScrollView>
        </View>
      </Screen>
      {isWatchList == true && (
        <Animatable.View
          animation={"slideInUp"}
          style={{
            width: "95%",
            // height: verticalScale(65),
            backgroundColor: "#283137",
            alignSelf: "center",
            paddingHorizontal: scale(10),
            position: "absolute",
            paddingVertical: scale(20),
            bottom: verticalScale(50),
          }}
        >
          {/* <Image
            style={{ width: scale(35), height: scale(35) }}
            source={images.verify}
            resizeMode="contain"
          /> */}
          <View style={{ marginTop: -4 }}>
            <CustomText
              text={saveText}
              color={colors.white}
              fontWeight={"400"}
              size={13}
              // style={{ marginLeft: scale(10), marginBottom: -5 }}
              // fontFam={"Poppins-SemiBold"}
            />
          </View>

          <View
            style={{
              ...AppStyles.row,
              alignSelf: "flex-end",
              paddingTop: verticalScale(20),
            }}
          >
            <TouchableOpacity onPress={() => setIsWatchList(false)}>
              <CustomText
                text={"Dismiss"}
                color={colors.white}
                fontWeight={"600"}
                size={13}
                // style={{ marginLeft: scale(10) }}
                fontFam={"Poppins-Medium"}
              />
            </TouchableOpacity>

            <Spacer width={scale(20)} />
            <TouchableOpacity
              onPress={() => {
                // setIsWatchList(false)
                navigation.navigate("Watchlist");
              }}
            >
              <CustomText
                text={watchlistDescription}
                color={colors.white}
                fontWeight={"600"}
                size={13}
                // style={{ marginLeft: scale(10) }}
                fontFam={"Poppins-Medium"}
              />
            </TouchableOpacity>
          </View>
        </Animatable.View>
      )}

      <CounterOfferModal
        modalVisible={isCounterOfferVisible}
        title={"Offering Price"}
        onSubmit={() => {
          setIsCounterOfferVisible(false);
          setTimeout(() => {
            
            setIsSubmitModal(true);
          }, 500);
        }}
        setModalVisible={setIsCounterOfferVisible}
      />
      <SuccessModal
        modalVisible={isSubmitModal}
        title={"Submitted"}
        descripation={"You will receive a response soon."}
        submitText={"Return to Home"}
        setModalVisible={setIsSubmitModal}
        onSubmit={() => {
          setIsSubmitModal(false);
          setTimeout(() => {
            navigation.navigate("Home");
          }, 500);
        }}
      />
      <SortedModal
        modalVisible={isSortedVisible}
        title={"Sort by"}
        selectedObject={sortedObject}
        setSelectedObject={setSortedObject}
        setModalVisible={setIsSortedVisible}
      />
      <ViewModal
        modalVisible={isViewVisible}
        title={"View"}
        selectedObject={viewObject}
        setSelectedObject={setViewObject}
        setModalVisible={setIsViewVisible}
      />
      <VehicleModal
        modalVisible={isVehicleVisible}
        title={"Vehicle Size"}
        selectedObject={vehicleObject}
        setSelectedObject={setVehicleObject}
        setModalVisible={setIsVehicleVisible}
      />
      <CategoryModal
        modalVisible={isCategoryVisible}
        title={"Category"}
        selectedObject={categoryObject}
        setSelectedObject={setCategoryObject}
        setModalVisible={setIsCategoryVisible}
      />
      <TravelModel
        modalVisible={isTravelVisible}
        title={"Pickup Radius"}
        setModalVisible={setIsTravelVisible}
      />

      <PaymentMethodModal
        onPressCard={() => {
          setIsPaymentModal(false);
          setTimeout(() => {
            steIsAddPaymentMethodVisible(true);
          }, 1000);
        }}
        modalVisible={isPaymentModal}
        setModalVisible={setIsPaymentModal}
      />
      <AddPaymentMethodModal
        onPay={() => {
          steIsAddPaymentMethodVisible(false);
          setTimeout(() => {
            setIsPickupDropInstructionModal(true);
          }, 1000);
        }}
        modalVisible={isAddPaymentMethodVisible}
        setModalVisible={steIsAddPaymentMethodVisible}
      />

<PickupDropInstructionModal
        mainColor={colors.primary}
        modalVisible={isPickupDropInstructionModal}
        navigation={navigation}
        onDonePress={()=>{
          setIsPickupDropInstructionModal(false);
          setTimeout(() => {
            setIsThankyouModal(true);
          }, 1000);

        }}
        setIsRateExperienceModal={setIsRateExperienceModal}
        setModalVisible={setIsPickupDropInstructionModal}
      />

      <ThankyouModal
        mainColor={colors.primary}
        modalVisible={isThankyouModal}
        navigation={navigation}
        setIsRateExperienceModal={setIsRateExperienceModal}
        setModalVisible={setIsThankyouModal}
      />

      <RateExperienceModal
        mainColor={colors.primary}
        modalVisible={isRateExperienceModal}
        navigation={navigation}
        setModalVisible={setIsRateExperienceModal}
      />

      <DriverDetailSheet
        bottomSheetModalRef={driverDetailSheetRef}
        selectedDrivers={selectedDrivers[0]}
        watchListObject={watchListObject}
        setIsWatchList={setIsWatchList}
        setIsCounterOfferVisible={setIsCounterOfferVisible}
        setWatchListObject={setWatchListObject}
        onCounterOffer={() => {
          driverDetailSheetRef.current.dismiss();

          setIsCounterOfferVisible(true);
        }}
        onBook={() => {
          driverDetailSheetRef.current.dismiss();
          if (deliveryType != "Dedicated") {
            setIsPaymentModal(true);
          } else {
            navigation.navigate("DedicatedService");
          }
        }}
      />
    </>
  );
};

export default DriverSearch;

const styles = StyleSheet.create({
  mapImgContainer: {
    width: 32,
    height: 32,
  },
});
