import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors } from "../../../utils/colors";
import { Screen } from "../../../utils/ui/Screen";
import { scale, verticalScale } from "react-native-size-matters";
import { image } from "../../../assets/png/images";
import { AppStyles } from "../../../utils/AppStyle";
import CustomText from "../../../components/CustomText";
import { Inter } from "../../../utils/Fonts";
import { icon } from "../../../assets/png/icons";
import { Spacer } from "../../../components/Spacer";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import CustomLine from "../../../components/CustomLine/CustomLine";
import EmailVerificationBottomSheet from "../../main/Driver/CustomerDriverSetting/EmailVerificationBottomSheet";
import NewPasswordBottomSheet from "../../main/Driver/CustomerDriverSetting/NewPasswordBottomSheet";
import {CommonActions} from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { setSelectedAccount } from "../../../redux/reducers/authReducer";

const DriverSignup = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeAuth, setActiveAuth] = useState(0);
  const [isLoginPassword, setIsLoginPassword] = useState(true);
  const [isSignPassword, setIsSignPassword] = useState(true);
  const newPasswordSheet = useRef(false);
  const emailVerificattionSheet = useRef(false);
  const dispatch=useDispatch()


  return (
    <>
      <Screen
        backgroundColor={colors.white}
        height={1}
        topBarColor={"#000"}
        barStyle={"dark-content"}
      >
        <ImageBackground
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: scale(20),
            paddingTop: verticalScale(50),
            paddingRight: "40%",

            // paddingTop: verticalScale(10),
            paddingBottom: verticalScale(60),
          }}
          source={image.signupback}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: scale(35),
              height: scale(35),
              borderRadius: scale(13),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.white,
              elevation: 5,
              shadowColor: Platform.OS == "ios" ? colors.gray200 : colors.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              backgroundColor: colors.white,
            }}
          >
            <Image
              style={{ width: scale(15), height: verticalScale(15) }}
              source={icon.back}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            style={{ width: scale(85), height: verticalScale(85) }}
            source={image.driverapplogo}
            resizeMode="contain"
          />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: scale(30),
            borderTopEndRadius: scale(30),
            marginTop: verticalScale(-60),
            // paddingTop: verticalScale(30),
            backgroundColor: colors.white,
          }}
        >
          <View
            style={{
              ...AppStyles.justifyRow,
              // backgroundColor: "red",
              borderTopLeftRadius: scale(30),
              borderTopEndRadius: scale(30),
              height: verticalScale(50),
              alignItems: "center",
              elevation: 5,
              shadowColor: Platform.OS == "ios" ? colors.gray200 : colors.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              backgroundColor: colors.white,
            }}
          >
            {["Sign In", "Sign Up"].map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setActiveAuth(index)}
                  style={{ width: "45%" }}
                >
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setActiveAuth(index)}
                    style={{
                      //   backgroundColor: "green",
                      height: verticalScale(50),
                      alignItems: "center",
                      justifyContent: "center",
                      //   backgroundColor:"red",
                      borderBottomWidth: 4,
                      borderBottomColor:
                        activeAuth == index ? colors.secondary : "transparent",
                    }}
                  >
                    <CustomText
                      text={item}
                      size={15}
                      fontWeight={"900"}
                      fontFam={Inter.bold}
                      color={
                        activeAuth == index ? colors.secondary : colors.gray100
                      }
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
          </View>
          <ScrollView>
            <View
              style={{
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(20),
                flex: 1,
              }}
            >
              <CustomText
                text={"Welcome!"}
                size={13.5}
                fontWeight={"700"}
                fontFam={Inter.bold}
                color={colors.black}
              />
              <CustomText
                text={"Ready to hit the road and earn on your terms?"}
                size={16}
                lineHeight={35}
                style={{
                  marginRight: scale(15),
                  marginVertical: verticalScale(10),
                }}
                // fontWeight={"600"}
                fontFam={Inter.medium}
                color={colors.gray200}
              />

              {activeAuth != 0 ? (
                <>
                  <CustomInput height={42} placeholder={"Username"} />
                  <Spacer height={verticalScale(12)} />
                  <CustomInput height={42} placeholder={"Email Address"} />

                  <Spacer height={verticalScale(12)} />

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.inputConter}
                  >
                    <View style={{ flex: 1 }}>
                      <TextInput
                        style={{
                          fontSize: 14,
                          paddingVertical: 5,
                          height: verticalScale(42),
                          color: colors.black,
                          fontFamily: Inter.medium,
                          fontWeight: "500",
                          alignItems: "center",
                        }}
                        placeholder={"Password"}
                        placeholderTextColor={colors.gray100}
                        secureTextEntry={isSignPassword}
                        //  onChangeText={onChangeText}
                      />
                    </View>

                    <TouchableOpacity
                      onPress={() => setIsSignPassword(!isSignPassword)}
                      style={{
                        height: verticalScale(42),
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      activeOpacity={0.6}
                    >
                      <CustomText
                        text={"Show/Hide"}
                        size={13}
                        fontFam={Inter.medium}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <CustomInput height={42} placeholder={"Email Address"} />

                  <Spacer height={verticalScale(12)} />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.inputConter}
                  >
                    <View style={{ flex: 1 }}>
                      <TextInput
                        style={{
                          fontSize: 14,
                          paddingVertical: 5,
                          height: verticalScale(42),
                          color: colors.black,
                          fontFamily: Inter.medium,
                          fontWeight: "500",
                          alignItems: "center",
                        }}
                        placeholder={"Password"}
                        placeholderTextColor={colors.gray100}
                        secureTextEntry={isLoginPassword}
                        //  onChangeText={onChangeText}
                      />
                    </View>

                    <TouchableOpacity
                      onPress={() => setIsLoginPassword(!isLoginPassword)}
                      style={{
                        height: verticalScale(42),
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      activeOpacity={0.6}
                    >
                      <CustomText
                        text={"Show/Hide"}
                        size={13}
                        fontFam={Inter.medium}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </>
              )}

              <Spacer height={verticalScale(12)} />

              <CustomButton
                height={42}
                bgColor={colors.secondary}
                text={"Login"}
                onPress={() => navigation.navigate("DriverHomeBottomTab")}
                borderRadius={12}
              />
              {activeAuth == 0 && (
                 <TouchableOpacity
                 activeOpacity={0.5}
                 onPress={()=>emailVerificattionSheet.current.present()}
                 style={{width:"60%",alignSelf:"center"}}
 
                 
                 >
                    <CustomText
                   text={"Forgot Password"}
                   size={14}
                   fontWeight={"400"}
                   textDecorationLine={"underline"}
                   style={{ textAlign: "center", marginTop: verticalScale(15) }}
                   fontFam={Inter.medium}
                   color={colors.gray200}
                 />
 
                 </TouchableOpacity>
              )}

              <View
                style={{
                  ...AppStyles.justifyRow,
                  marginTop: verticalScale(20),
                }}
              >
                <CustomLine width={"33%"} />
                <CustomText
                  text={"Or login using"}
                  size={13}
                  fontWeight={"400"}
                  style={{ marginHorizontal: verticalScale(5) }}
                  fontFam={Inter.medium}
                  color={colors.gray}
                />
                <CustomLine width={"33%"} />
              </View>

              <View
                style={{
                  ...AppStyles.row,
                  alignSelf: "center",
                  marginVertical: verticalScale(20),
                }}
              >
                <TouchableOpacity style={styles.authImg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={image.facebook}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.authImg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={image.x}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.authImg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={image.google}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.authImg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={image.apple}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <CustomText
              text={"Buzz a driver and experience seamless deliveries"}
              size={13}
              // lineHeight={35}
              style={{
                //   marginRight: scale(15),
                marginHorizontal: scale(5),
                marginTop: verticalScale(5),
                textAlign: "center",
              }}
              fontWeight={"400"}
              // fontFam={Inter.medium}
              color={colors.gray200}
            />
            <View
              style={{
                ...AppStyles.row,
                alignSelf: "center",
                marginTop: verticalScale(5),
              }}
            >
              <CustomText
                text={"or rides"}
                size={13}
                // lineHeight={35}
                style={{
                  //   marginRight: scale(15),
                  marginRight: scale(5),
                }}
                fontWeight={"400"}
                // fontFam={Inter.medium}
                color={colors.gray200}
              />
              <TouchableOpacity
              activeOpacity={0.4}
              onPress={()=>{
                dispatch(setSelectedAccount("Customer"))
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'CustomerTab'}],
                  }),
                );

              }}
              >
              <CustomText
                text={"Sign in as Customer"}
                size={13}
                fontWeight={"600"}
                textDecorationLine={"underline"}
                style={{ textAlign: "center" }}
                fontFam={Inter.medium}
                color={colors.secondary}
              />

              </TouchableOpacity>
            
            </View>
          </ScrollView>
        </View>
      </Screen>

      <EmailVerificationBottomSheet
            color={colors.secondary}

        bottomSheetModalRef={emailVerificattionSheet}
        onSubmit={() => {
          emailVerificattionSheet.current.dismiss();
          setTimeout(() => {
            newPasswordSheet.current.present();
          }, 500);
        }}
      />
      <NewPasswordBottomSheet
      color={colors.secondary}
        bottomSheetModalRef={newPasswordSheet}
        onSubmit={() => {
          newPasswordSheet.current.dismiss();
          setTimeout(() => {
            navigation.navigate("DriverHomeBottomTab");
          }, 500);
        }}
      />
    </>
  );
};

export default DriverSignup;

const styles = StyleSheet.create({
  authImg: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(60),
    overflow: "hidden",
    marginRight: scale(12),
  },
  inputConter: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.black40,
    backgroundColor: colors.white,
    borderWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: scale(7),
    borderRadius: scale(12),
    width: "100%",
  },
});
