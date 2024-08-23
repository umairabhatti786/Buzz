import { StyleSheet, Text, View,Image ,TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import { AppStyles } from '../../../../utils/AppStyle'
import { colors } from '../../../../utils/colors'
import CustomText from '../../../../components/CustomText'
import { icon } from '../../../../assets/png/icons'
import { scale, verticalScale } from 'react-native-size-matters'
import { Spacer } from '../../../../components/Spacer'

const DeliveryBottomTab = ({isActive,optimizeImageColor,optimizeTextColor,onPressOptomize}) => {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",height:verticalScale(65),
        backgroundColor:colors.white,
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        paddingTop:verticalScale(8),
        paddingHorizontal:scale(15)
    }}>
        <TouchableOpacity
        onPress={onPressOptomize}
         style={{alignItems:"center"}}>
       
                <Image
                  style={{ width: scale(23), height: scale(23),tintColor: optimizeImageColor|| colors.gray }}
                  resizeMode="contain"
                  source={icon.route}
                />
                <Spacer height={verticalScale(5)}/>
              
              <CustomText
                // fontWeight="400"
                color={ optimizeTextColor|| colors.gray}
                size={9}
                style={{textAlign:"center"}}
                text={"Optimize Route"}
              />

        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:"center",marginTop:-1}}>
       
       <Image
         style={{ width: scale(22), height: scale(22),tintColor:colors.gray }}
         resizeMode="contain"
         source={icon.trip}
       />
       <Spacer height={verticalScale(5)}/>
     
     <CustomText
       // fontWeight="400"
       color={  colors.gray}
       size={9}
       style={{textAlign:"center"}}
       text={"New Trip"}
     />

</TouchableOpacity>



<TouchableOpacity style={{alignItems:"center"}}>
       
       <Image
         style={{ width: scale(20), height: scale(20),tintColor:colors.gray }}
         resizeMode="contain"
         source={icon.watchlist}
       />
       <Spacer height={verticalScale(5)}/>
     
     <CustomText
       // fontWeight="400"
       color={colors.gray}
       size={9}
       style={{textAlign:"center"}}
       text={"Saved Trip(s)"}
     />

</TouchableOpacity>

<TouchableOpacity style={{alignItems:"center"}}>
       
       <Image
         style={{ width: scale(20), height: scale(20),tintColor:colors.gray }}
         resizeMode="contain"
         source={icon.history}
       />
       <Spacer height={verticalScale(5)}/>
     
     <CustomText
       // fontWeight="400"
       color={colors.gray}
       size={9}
       style={{textAlign:"center"}}
       text={"History"}
     />

</TouchableOpacity>

<TouchableOpacity style={{alignItems:"center"}}>
       
       <Image
         style={{ width: scale(20), height: scale(20),tintColor:colors.gray }}
         resizeMode="contain"
         source={icon.earning}
       />
       <Spacer height={verticalScale(5)}/>
     
     <CustomText
       // fontWeight="400"
       color={colors.gray}
       size={9}
       style={{textAlign:"center"}}
       text={"Earnings"}
     />

</TouchableOpacity>


    </View>
  )
}

export default DeliveryBottomTab

const styles = StyleSheet.create({})