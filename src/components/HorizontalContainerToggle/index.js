import { Image, Text, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import ToggleSwitch from "toggle-switch-react-native";
import { icon } from "../../assets/png/icons";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import NewText from "../NewText";
import CustomToggle from "../CustomToggle";

const HorizontalContainerToggle = ({
  text,
  leftImage,
  color,
  isEnabled,
  toggleSwitch,
  isSwitch,
  onPress,
  width,
  size1,
  size,
  text1,
  isActive,
  setIsActive,
  isNext,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={AppStyles.justifyRow}
    >
      <NewText color={color || colors.black} text={text} size={size || 14} />
      <View style={AppStyles.row}>
        <CustomToggle isActive={isActive} setIsActive={setIsActive} />

        {isNext && (
          <>
            <Spacer width={scale(10)} />
            <Image
              style={{ width: scale(15), height: scale(15) }}
              source={icon.nexticon}
              resizeMode={"contain"}
            />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default HorizontalContainerToggle;
