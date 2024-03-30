import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { colors } from '../../../utils/colors'
import { AppStyles } from '../../../utils/AppStyle'
import { Inter } from '../../../utils/Fonts'
import CustomLine from '../../../components/CustomLine/CustomLine'
import CustomText from '../../../components/CustomText'
import { icon } from '../../../assets/png/icons'
import HorizontalContainer from '../../../components/HorizontalContainer'
import DashedLine from 'react-native-dashed-line'
import Collapsible from 'react-native-collapsible'
import CustomButton from '../../../components/CustomButton'

const OrderInvoice = () => {
    const [isCollapsible,setIsCollapsible]=useState(false)

    
  return (
    <View style={{borderRadius:scale(15),borderWidth:1,borderColor:colors.black40}}>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>setIsCollapsible(!isCollapsible)}
        style={{...AppStyles.justifyRow,padding:verticalScale(15)}}>

        <CustomText
                  text={"Invoice"}
                  size={14}
                  fontWeight={"600"}
                  fontFam={Inter.semiBold}
                  color={colors.black}
                />

              <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={ isCollapsible==false?icon.up: icon.down}
                />
           


        </TouchableOpacity>
        <Collapsible
        collapsed={isCollapsible}
        >
        <View>

        <CustomLine/>
        <View style={{padding:scale(15)}}>

        <HorizontalContainer
                text={"Order ID #"}
                size={13}
                text1={"#126353"}
                size1={13}

                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>
                <HorizontalContainer
                text={"Total Distance"}
                size={13}
                text1={"10 Miles"}
                size1={13}

                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>

                <HorizontalContainer
                text={"Total Time"}
                size={13}
                text1={"02:45 hr"}
                size1={13}

                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>

                <HorizontalContainer
                text={"Cost Per Mile"}
                size={13}
                text1={"$10"}
                size1={13}

                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>


                <HorizontalContainer
                text={"Total Cost"}
                size={13}
                text1={"$100"}
                size1={13}

                />
                
              

        </View>

        <CustomLine/>
        <View style={{alignSelf:"flex-end",marginRight:scale(15),marginVertical:verticalScale(15)}}>
        <CustomButton
                 text={"Download"}
                 height={30}
                 size={14}

                 borderColor={colors.primary}
                 borderWidth={1}
                 width={scale(110)}
                 />


        </View>

       

        </View>
        </Collapsible>



            </View>
  )
}

export default OrderInvoice

const styles = StyleSheet.create({

    iconContainer:{
        width: scale(14), height: scale(14) 

    }

})