import { Pressable, Text, TouchableOpacity, View,ActivityIndicator } from "react-native";

import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import NewText from "../NewText";



const Button = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
  paddingHorizontal,
  fontWeight,
  borderWidth
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.9}
      style={{
        ...style,
        width: width,
        height: verticalScale(height||48),
        backgroundColor: bgColor || colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:paddingHorizontal,
        borderRadius: scale(borderRadius || 8),
        borderWidth:borderWidth ,
        borderColor: borderColor ,
        // paddingTop:5
      }}
    >
      {isLoading ? (
        <>
              <ActivityIndicator size={"large"} color={colors.white} />

        </>
      ) : (
        <NewText
          text={text}
          color={textColor || colors.white}
          fontWeight={ fontWeight ||"600"}
          size={size || 15}
          fontFam={fontFam ||"Poppins-Medium"}
        />
      )}
    </TouchableOpacity>
  );
};
export default Button;
