import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { Inter } from "../../../../utils/Fonts";
import Collapsible from "react-native-collapsible";
import { image } from "../../../../assets/png/images";
import { icon } from "../../../../assets/png/icons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { Spacer } from "../../../../components/Spacer";
import DashedLine from "react-native-dashed-line";
import OrderCard from "../../../../components/OrderCard";


const RouteProgress = () => {
  const [isCollapsible, setIsCollapsible] = useState(false);

const DestinationContainer=()=>{
    return(
        <View style={{alignItems:"center"}}>
        <View
  style={{
    width:scale(40),
    height: scale(40),

  }}>
  <Image
    style={{
      width: "100%",
      height: "100%",
      borderRadius: scale(10),
    }}
    resizeMode={"contain"}
    source={image.marker}
  />
  <View
    style={styles.count}>
           <CustomText
        text={"1"}
        color={colors.white}
        fontFam={Inter.bold}
        fontWeight="700"
        size={15}
      />
  
  </View>
</View>

<CustomLine
width={scale(3)}
height={verticalScale(180)}
backgroundColor={"#0A987F20"}
/>

<View
  style={{
    width:scale(40),
    height: scale(40),

  }}>
  <Image
    style={{
      width: "100%",
      height: "100%",
      borderRadius: scale(10),
    }}
    resizeMode={"contain"}
    source={image.marker}
  />
  <View
    style={styles.count}>
           <CustomText
        text={"2"}
        color={colors.white}
        fontFam={Inter.bold}
        fontWeight="700"
        size={15}
      />
  
  </View>
</View>

<CustomLine
width={scale(3)}
height={verticalScale(100)}
backgroundColor={"#0A987F20"}
/>

        </View>

    )
}

  return (
      <View
      style={{
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity:0.2,
        shadowRadius: 5,
        marginVertical:verticalScale(20)
      }}
      >
           <View
      style={{
        backgroundColor: colors.white,
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: scale(12),
      }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsCollapsible(!isCollapsible)}
        style={{ ...AppStyles.justifyRow, padding: verticalScale(15) }}>
        <CustomText
          text={"Route Progress"}
          size={14}
          fontWeight={"600"}
          fontFam={Inter.semiBold}
          color={colors.black}
        />

        <Image
          style={styles.iconContainer}
          resizeMode={"contain"}
          source={isCollapsible == false ? icon.up : icon.down}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsible}>
        <View>
          <CustomLine />
          <View style={{ padding: scale(15) }}>
            <View
              style={{
                width: "100%",
                height: verticalScale(200),
                borderRadius: scale(10),
                overflow: "hidden",
              }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: scale(10),
                }}
                resizeMode={"cover"}
                source={image.mapdirection}
              />
              <View
                style={{
                  width: scale(35),
                  height: scale(35),
                  position: "absolute",
                  bottom: verticalScale(10),
                  right: scale(10),
                }}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  resizeMode={"contain"}
                  source={image.zoom}
                />
              </View>
            </View>
                <View style={{...AppStyles.justifyRow,marginTop:verticalScale(20),marginBottom:verticalScale(10)}}>
             
  
                  <CustomText
                    text={"20 Stops"}
                    color={colors.black}
                    fontFam={Inter.bold}
                    fontWeight="700"
                    size={15}
                  />
                  <View style={AppStyles.row}>

                  <CustomText
                    text={"8.18 Mi"}
                    color={colors.gray}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={13}
                  />
                  <View style={{width:scale(5),height:scale(5),borderRadius:999,backgroundColor:"#D9D9D9",marginHorizontal:scale(5)}}></View>
                   <CustomText
                    text={"4:01 hr"}
                    color={colors.gray}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={13}
                  />
                  </View>
  

 
                 
                </View>

                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />

                <View style={{flexDirection:"row",marginVertical:verticalScale(20)}}>
                    <DestinationContainer/>
                    <View style={{marginLeft:scale(5)}}>
                    <OrderCard
                    taskStatus={"Success"}
                    />
                    <Spacer height={verticalScale(20)}/>
                     <OrderCard
                    taskStatus={"Failed"}
                    />


                    </View>
                   

                </View>

               
          </View>
        </View>
      </Collapsible>
    </View>

      </View>
   
  );
};

export default RouteProgress;

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
  count:{
                
    position: "absolute",
    right:0,
    bottom:0,
    top:verticalScale(6),
    left:scale(15),
  }
});
