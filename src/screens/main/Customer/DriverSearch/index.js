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
import React, { useState ,useEffect} from "react";
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


const DriverSearch = ({ navigation }) => {
  const [isWatchList,setIsWatchList]=useState(false)
  const [watchListObject,setWatchListObject]=useState([])
  const [saveText,setSaveText]=useState("")
  const data = [
    {
      id: 1,
      label: "task1",
      value: "Andrede",
    },
    {
      id: 2,
      label: "task2",
      value: "Herr",
    },
  ];

  const customerTicketData=[
    {img:image.defimg900,name:"Will Smith",active:"Available",distance:"15 mil",time:"15 Min Away",vehicle:"Car",
    isOpen:true,
    id:1
  },
    {img:image.defimg600,name:"Kadin Botosh",active:"Busy",distance:"15 mil",time:"15 Min Away",vehicle:"Cargo-van",
    isOpen:false,
    id:2,


  },
    {img:image.defimg700,name:"Will Smith",active:"On Schedule",distance:"15 mil",time:"15 Min Away",vehicle:"Car",
    isOpen:true,
    id:3

  },
    {img:image.defimg700,name:"Will Smith",active:"Inactive",distance:"15 mil",time:"15 Min Away",vehicle:"Car",
    isOpen:true,
    id:4

  },

  ]

  // useEffect(() => {
    
  
  //   setTimeout(() => {
  //     setIsWatchList(!isWatchList)
      
  //   }, 2000);
  // }, [isWatchList])


  console.log("isWatchList",isWatchList)
  

  const renderCustomerUser = ({ item, index }) => {
    return (
      <>
      <View style={{paddingHorizontal:scale(15),paddingTop:verticalScale(10)}}>

      <CustomerTicket
        item={item}
        setIsWatchList={setIsWatchList}
        setWatchListObject={setWatchListObject}
        watchListObject={watchListObject}
        onWatchList={()=>{
          setSaveText("Saved, you can see your saved Driver in Watchlist")
          setIsWatchList(true)


          const findObject = watchListObject?.find((e) => e.id == item.id);
          if (findObject) {
            const dataContact1 = watchListObject.filter((f) => f.id != item.id);
      
            setWatchListObject(dataContact1);
          } else {
            const dataContact = [...watchListObject, item]; // Replace 'New Data' with your actual data
            setWatchListObject(dataContact);
          }
          setTimeout(() => {
            setIsWatchList(false)
            
          }, 2000);
          // setWatchListObject(item)

        }}
        onPress={()=>navigation.navigate("TrackOrder",{orderData:item})}
        />

      </View>
       
        
      </>
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
        <View
            style={{
              ...AppStyles.justifyRow,
              backgroundColor:colors.white,
              paddingVertical: verticalScale(13),
              paddingHorizontal: scale(15),
              elevation: 5,
              shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
              shadowOffset: { width: 4, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}>
            <TouchableOpacity
            style={{width:"33%"}}
             onPress={() => navigation.goBack()}>
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
            <View style={{width:"33%"}} />
          </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(15),
            }}>
            <CustomInput
              leftImage={icon.location}
              value="Town Hall, New York"
            />
            <Spacer height={verticalScale(10)} />
            <CustomInput
              leftImage={icon.location}
              placeholder="Drop Off Address"
            />

            <View
              style={{
                ...AppStyles.row,
                alignSelf: "flex-end",
                paddingVertical: verticalScale(10),
              }}>
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
            </View>
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
              }}>
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
                <CustomText
                  text={"Sort By"}
                  color={colors.black}
                  fontFam={Inter.medium}
                  // fontWeight="400"
                  size={14}
                />
                <Spacer width={scale(10)} />

                <DropDown
                  placeholder={"Default"}
                  dropWidth={scale(90)}
                  //   data={data}
                  data={data.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                />
              </View>
              <View style={AppStyles.row}>
                <CustomText
                  text={"View"}
                  color={colors.black}
                  fontFam={Inter.medium}
                  // fontWeight="400"
                  size={14}
                />
                <Spacer width={scale(10)} />

                <DropDown
                  placeholder={"List View"}
                  dropWidth={scale(100)}
                  //   data={data}
                  data={data.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                />
              </View>
            </View>
            <Spacer height={scale(15)} />
            <CustomLine />

            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>{
              setSaveText("Saved. You can view your saved search in watchlist.")
              setIsWatchList(true)

              setTimeout(() => {
                setIsWatchList(false)
                
              }, 3000);
            }}
              style={{
                ...AppStyles.row,
                alignSelf: "flex-end",
                marginTop: verticalScale(12),
                marginBottom: verticalScale(20),
              }}>

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
                  tintColor: colors.primary,
                }}
                source={icon.watchlist}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={AppStyles.justifyRow}>
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>navigation.navigate("CustomerFilter")}
               style={AppStyles.row}>
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
          <View style={{...AppStyles.row,height:verticalScale(60)}}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
              <View style={{marginRight:scale(10),marginLeft:scale(15)}}>
              <DropDown
                  placeholder={"Category"}
                  dropWidth={scale(100)}
                  //   data={data}
                  data={data.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                />

              </View>
              <View style={{marginRight:scale(10)}}>
              <DropDown
                  placeholder={"Vehicle Size"}
                  dropWidth={scale(120)}
                  //   data={data}
                  data={data.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                />

              </View>
              <View style={{marginRight:scale(10)}}>
              <DropDown
                  placeholder={"Travel Distance"}
                  dropWidth={scale(140)}
                  //   data={data}
                  data={data.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                />

              </View>
              

            </ScrollView>

          </View>
          <View
          // style={{paddingHorizontal:scale(15)}}
          >

<FlatList
          data={customerTicketData}
          style={{paddingBottom:verticalScale(30)}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap:verticalScale(5) }}
          keyExtractor={(item) => item}
          renderItem={renderCustomerUser}
        />


          </View>


        </ScrollView>
      </View>
    </Screen>
     {isWatchList==true && (
        <Animatable.View
          animation={"slideInUp"}
          
          style={{
            width: "95%",
            // height: verticalScale(65),
            backgroundColor: "#283137",
            alignSelf:"center",
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

          <View style={{...AppStyles.row,alignSelf:"flex-end",paddingTop:verticalScale(20)}}>
<TouchableOpacity
activeOpacity={0.6}
onPress={()=>setIsWatchList(false)}
>
<CustomText
              text={"Dismiss"}
              color={colors.white}
              fontWeight={"600"}
              size={13}
              // style={{ marginLeft: scale(10) }}
              fontFam={"Poppins-Medium"}
            />

</TouchableOpacity>
          
            <Spacer width={scale(20)}/>

             <CustomText
              text={"See Watchlist"}
              color={colors.white}
              fontWeight={"600"}
              size={13}
              // style={{ marginLeft: scale(10) }}
              fontFam={"Poppins-Medium"}
            />

          </View>
        </Animatable.View>
      )}
    </>
   
  );
};

export default DriverSearch;

const styles = StyleSheet.create({});
