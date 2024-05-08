import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { CustomHeader } from "../../../../components/CustomHeader";
import NewText from "../../../../components/NewText";
import { colors } from "../../../../utils/colors";
import { Inter } from "../../../../utils/Fonts";
import { AppStyles } from "../../../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import { icon } from "../../../../assets/png/icons";


const CustomerWatchlist = ({navigation}) => {





  return (
      <>
       <Screen
      backgroundColor={colors.white}
      topBarColor={colors.white}
      barStyle={"dark-content"}
    >
      <View style={{padding:15}}>
      <NewText
          fontWeight="700"
          color={colors.black}
          fontFam={Inter.bold}
          size={18}
          text={"Watch List"}
        />

<View
                      style={{
                        ...AppStyles.justifyRow,
                        marginTop: verticalScale(20),
                        marginBottom: verticalScale(10),

                        marginRight: scale(5),
                      }}>
                      <NewText
                        fontWeight="700"
                        color={colors.black}
                        fontFam={Inter.bold}
                        text={"Favorites Movers"}
                        size={16}
                      />

                    
                        <Spacer width={scale(10)} />
                        <Image
                          style={{ width: scale(13), height: scale(13) }}
                          source={icon.up}
                          resizeMode={"contain"}
                        />
                    </View>

       

     
      </View>
    </Screen>

   


      </>
   
  );
};

export default CustomerWatchlist;

const styles = StyleSheet.create({});
