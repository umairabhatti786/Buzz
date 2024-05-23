import {
    StyleSheet,
    View,
  } from "react-native";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/colors";
import Button from "../../../../components/Button";
import CustomInput from "../../../../components/CustomInput";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from "react-native-confirmation-code-field";
import { useState } from "react";
import NewText from "../../../../components/NewText";
import { scale } from "react-native-size-matters";
import { AppStyles } from "../../../../utils/AppStyle";
  
  const NumberVerificationModal = ({ modalVisible, setModalVisible,onSubmit }) => {
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: 4 });

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });

    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Enter your phone number"}
      
      >
        <View style={{margin:10,gap:10,}}>
        <NewText
                  fontWeight="400"
                color={colors.gray200}
                //   fontFam={Inter.bold}
                size={16}
                style={{
                    marginRight: scale(30),
                }}
                text={"Enter the 4-digit code sent to your phone"}
              />
        <CodeField
            ref={ref}
            {...props}
            caretHidden={true}
            value={value}
            onChangeText={(value) => {
              setValue(value);
              if (value.length == 4) {
                // onHandleOTP(value);
              }
            }}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={{
                  ...styles.codeFieldCell,
                }}
              >
                <NewText
                  size={22}
                  fontWeight={"600"}
                  color={colors.gray}
                  text={symbol || (isFocused ? <Cursor /> : "0")}
                />
              </View>
            )}
          />

         
          <View style={AppStyles.justifyRow}>
          <NewText
                  fontWeight="600"
                color={"#01AD8F"}
                textDecorationLine={"underline"}
                //   fontFam={Inter.bold}
                size={16}
                style={{
                    marginRight: scale(30),
                }}
                text={"Resend"}
              />
          <Button
                text={"Submit"}
                height={32}
                bgColor={"#01AD8F"}
                borderColor={"transparent"}
                borderWidth={-1}
                onPress={onSubmit}
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
  
  export default NumberVerificationModal;
  
  const styles = StyleSheet.create({
    cardImage: { width: 50, height: 50 },
    codeFieldRoot: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 80,
        gap: 25,
      },
      codeFieldCell: {
        justifyContent: "center",
        alignItems: "center",
        width: 55,
        height: 55,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: colors.black10,
      },
  });
  