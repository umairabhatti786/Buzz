import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import DashedLine from "react-native-dashed-line";

const SettingContainer = ({ text1, text ,data,index}) => {

  return (

    <View >
    <TouchableOpacity activeOpacity={0.6} style={{...AppStyles.justifyRow,}}>
    <CustomText color={colors.black} text={text} size={13} />
    <View style={AppStyles.row}>
    <CustomText color={"#666666"} text={text1} 
    fontWeight={"400"}
    size={13} />
    <Spacer width={scale(7)}/>


    <Image
            style={{
              width: scale(15),
              height: scale(15),
            }}
            source={icon.nexticon}
            resizeMode="contain"
          />


    </View>
  </TouchableOpacity>
  {
      data.length-1!=index?(
        <View style={{marginVertical:verticalScale(13)}}>
        <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.black40} />


        </View>

      ):(
        <View style={{marginVertical:verticalScale(8)}}/>

      )
  }





    </View>
   
  );
};

export default SettingContainer;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal:scale(15),
    paddingBottom:verticalScale(10)
  },
});
