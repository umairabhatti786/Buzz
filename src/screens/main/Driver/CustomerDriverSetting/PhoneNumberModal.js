import {
    StyleSheet,
    View,
  } from "react-native";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/colors";
import Button from "../../../../components/Button";
import CustomInput from "../../../../components/CustomInput";
  
  const PhoneNumberModal = ({ modalVisible, setModalVisible,onSubmit }) => {
 
  
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Enter your phone number"}
      
      >
        <View style={{margin:10,gap:20}}>

        <CustomInput 
        height={35}
            paddingHorizontal={10}
            borderWidth={2}
            placeholder={"(000)-000-0000"}
            value={""}
          

            
            borderRadius={8}
            
           />
         
          <View style={{alignSelf:"flex-end"}}>
          <Button
                text={"Submit"}
                height={32}
                onPress={onSubmit}
                bgColor={"#01AD8F"}
                borderColor={"transparent"}
                borderWidth={-1}
                size={16}
                width={90}
                borderRadius={7}
                textColor={colors.white}
              />

          </View>


        </View>
      </CustomModal>
    );
  };
  
  export default PhoneNumberModal;
  
  const styles = StyleSheet.create({
    cardImage: { width: 50, height: 50 },
  });
  