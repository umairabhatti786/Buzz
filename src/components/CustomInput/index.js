import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";



const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftImage,
  rightImage,
  imgWidth,
  imgHeigth,
  height,
  width,
  borderRadius,
  paddingHorizontal,
  placeholderTextColor
}) => {
  return (
    <View style={{ ...props, }}>
      <View style={{ 
        flexDirection: "row" ,
        alignItems:"center",
         borderColor:colors.black40,
         backgroundColor:colors.white,
         borderWidth: 1,
         justifyContent: "space-between",
         paddingHorizontal: scale(  paddingHorizontal||10),
         borderRadius:scale( borderRadius|| 12),
         width: width|| "100%",
    }}>
         {leftImage && (
            <View
              activeOpacity={0.6}
              style={{ justifyContent: "center", alignItems: "center"}}
            >
              <Image
                source={leftImage}
                resizeMode="contain"
                style={{
                  width: imgWidth||  scale(16),
                  height: imgHeigth  ||scale(16),
                  
                }}
              />
            </View>
          )}



          <View style={{ flex: 1,marginHorizontal:10 }}>
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: verticalScale(13),
                height: verticalScale(height|| 45),
                color: color || colors.black,
                fontFamily:Inter.medium,
                fontWeight:"500",
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              placeholderTextColor={ placeholderTextColor|| colors.gray100}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
          </View>
          {rightImage && (
            <TouchableOpacity
              onPress={onShowPassword}
              activeOpacity={0.6}
              disabled={!onShowPassword}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={rightImage}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                }}
              />
            </TouchableOpacity>
          )}
    
      </View>
    
      {error && (
        <View
          style={{
            alignItems: "flex-end",
            marginTop:3
          }}
        >
          <CustomText
          size={11}
           text={error} color={"red"} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
