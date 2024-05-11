import { Image, Text,TouchableOpacity,View } from "react-native";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";
import NewText from "../NewText";


const HorizontalContainer = ({text,leftImage,color,isEnabled,toggleSwitch,isSwitch,onPress,width,size1,size,text1}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
     style={AppStyles.justifyRow}>

       
        <NewText
        color={ color|| "#666666"}
        text={text}

        size={ size ||16}
        fontWeight={"400"}
        />
         <NewText
        color={ color|| colors.black}
        text={text1}

        size={ size1 ||16}
        fontWeight={"500"}
        fontFam={Inter.medium}
        />

    
       

    

    </TouchableOpacity>
  );
};
export default HorizontalContainer;
