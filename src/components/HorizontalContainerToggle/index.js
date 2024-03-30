import { Image, Text,TouchableOpacity,View } from "react-native";
import { scale } from "react-native-size-matters";
import ToggleSwitch from "toggle-switch-react-native";
import { icon } from "../../assets/png/icons";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";


const HorizontalContainerToggle = ({text,leftImage,color,isEnabled,toggleSwitch,isSwitch,onPress,width,size1,size,text1,isActive,setIsActive,isNext}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
     style={AppStyles.justifyRow}>

       
        <CustomText
        color={ color|| colors.black}
        text={text}

        size={ size ||13}
        />
        <View style={AppStyles.row}>
        <ToggleSwitch
            isOn={isActive}
            onColor={"#F2F2F2"}
            offColor={"#F2F2F2"}
            size="small"
            style={{ opacity: isActive ? 1 : 0.5 }}
            onToggle={setIsActive}
            thumbOnStyle={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: "#008000",
            }}
            thumbOffStyle={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: "#CCCCCC",
            }}
            trackOffStyle={{ width: 52, height: 30 }}
            trackOnStyle={{ width: 52, height: 30 }}
          />

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
