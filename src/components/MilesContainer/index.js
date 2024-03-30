import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { AppStyles } from '../../utils/AppStyle'
import { icon } from '../../assets/png/icons'
import CustomInput from '../CustomInput'
import CustomText from '../CustomText'
import { colors } from '../../utils/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import { Spacer } from '../Spacer'
import DashedLine from 'react-native-dashed-line'

const MilesContainer = ({item}) => {

  const  [mi,setMi]=useState("20")
  const  [mile,setMile]=useState("")

  return (
      <View>
          <View
                    style={{
                    //   marginVertical: verticalScale(5),
                      ...AppStyles.row,
                    }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      style={{ width: "44%" }}
                      dashColor={colors.gray}
                    />
                    <Image
                      style={{ width: scale(33), height: scale(33) }}
                      source={icon.addicon}
                      resizeMode={"contain"}
                    />
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      style={{ width: "44%" }}
                      dashColor={colors.gray}
                    />
                  </View>

<View style={AppStyles.justifyRow}>
    {
        item.mile?(
            <View style={AppStyles.row}>
  

<Image
              style={{ width: scale(8), height: scale(8),}}
              source={ item.mile>20?icon.forward: icon.backword}
              resizeMode={"contain"}
            />
            <Spacer width={scale(8)}/>

<CustomInput height={29}
            width={scale(40)}
            paddingHorizontal={1}
            value={mi}
            onChangeText={(txt)=>{

              if (/^\d+$/.test(txt) || txt === "") {
               

                setMi(txt);
              }

            }}

            
            borderRadius={8}
            
           />

<Spacer width={scale(8)}/>

<CustomText
          text={"ml"}
          color={colors.black}
          size={13}
        />

</View>

        ):(
            <CustomText
          text={item.toMile+" - "+ item.formMile+" mi"}
          color={colors.black}
          size={13}
        />
            
        )
    }




<CustomInput height={29}
            width={scale(70)}
            paddingHorizontal={1}
            placeholder={"$/mile"}
            value={mile}
            onChangeText={(txt)=>{

              if (/^\d+$/.test(txt) || txt === "") {
               

                setMile(txt);
              }

            }}
            
            borderRadius={8}
            
            />


</View>



      </View>
  
  )
}

export default MilesContainer

const styles = StyleSheet.create({})