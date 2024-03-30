import {  StyleSheet,  } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors } from './colors';

export const AppStyles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:colors.white,


    },

    row:{
        flexDirection:"row",
        alignItems:"center",

    },
    justifyRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    box: {
        borderRadius: scale(15),
        borderWidth: 1,
        borderColor: colors.black40,
      }



})