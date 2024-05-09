import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../utils/colors";
import { AppStyles } from "../utils/AppStyle";
import NewText from "./NewText";
import { Spacer } from "./Spacer";
import { Inter } from "../utils/Fonts";
import { icon } from "../assets/png/icons";

const CustomTicket = ({
  item,
  onPress,
  isNoShadow,
  backgroundColor,
  isWatchList,
  onWatchList,

  isCollapsible,
  setIsCollapsible,
}) => {
  // const [isCollapsible,setIsCollapsible]=useState(item.isOpen)
  // const [isWatchList,setIsWatchList]=useState(false)

  return (
    <View
      style={{
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity: !isNoShadow ? 0.2 : 0,
        shadowRadius: 5,
      }}
    >
      <View
        style={{
          backgroundColor: backgroundColor || colors.white,
          elevation: 5,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 4, height: 5 },
          shadowOpacity: !isNoShadow ? 0.2 : 0,
          shadowRadius: 5,
          borderRadius: scale(15),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={{
            flexDirection: "row",
            flex: 1,
            paddingVertical: verticalScale(10),
          }}
        >
          <View
            style={{
              width: scale(52),
              height: scale(52),
              borderRadius: scale(7),
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode={"contain"}
              source={item.img}
            />
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              flex: 1,
              paddingLeft: scale(10),
              paddingVertical: verticalScale(2),
            }}
          >
            <View
              style={{
                ...AppStyles.justifyRow,
                paddingBottom: verticalScale(10),
              }}
            >
              <View style={{ ...AppStyles.row }}>
                <NewText
                  text={item.name}
                  size={15}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />
                <Spacer width={scale(8)} />
                <View
                  style={{
                    width: scale(6),
                    height: scale(6),
                    borderRadius: 999,
                    backgroundColor:
                      item.active == "Available"
                        ? colors.green
                        : item.active == "Busy"
                        ? colors.red
                        : item.active == "On Schedule"
                        ? colors.yellow
                        : colors.gray,
                  }}
                />
                <Spacer width={scale(5)} />

                <NewText
                  text={item.active}
                  size={12}
                  // fontWeight={"600"}
                  // fontFam={Inter.bold}
                  color={colors.gray}
                />
                <Spacer width={scale(5)} />
              </View>
              <View style={AppStyles.row}>
                <Image
                  style={{ width: 10, height: 14 }}
                  resizeMode={"contain"}
                  source={icon.star}
                />
                <Spacer width={scale(7)} />

                <NewText
                  text={"4.9"}
                  size={15}
                  fontWeight={"600"}
                  fontFam={Inter.semiBold}
                  color={colors.black}
                />
                <Spacer width={scale(7)} />
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 16,
                      height: 19,
                      tintColor: item.isWatchlist
                        ? colors.primary
                        : colors.gray100,
                    }}
                    resizeMode={"contain"}
                    source={icon.watchlist}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              //   onPress={() => setIsCollapsible(!isCollapsible)}
              style={{ ...AppStyles.justifyRow }}
            >
              <View style={{ ...AppStyles.row }}>
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.location}
                />

                <Spacer width={scale(5)} />

                <NewText text={item.distance} size={12} color={colors.gray} />
                <Spacer width={scale(7)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.clock}
                />

                <Spacer width={scale(5)} />

                <NewText text={item.time} size={12} color={colors.gray} />
                <Spacer width={scale(5)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.car}
                />

                <Spacer width={scale(7)} />

                <NewText text={item.vehicle} size={12} color={colors.gray} />
                <Spacer width={scale(5)} />
              </View>

              <Image
                style={styles.iconContainer}
                resizeMode={"contain"}
                source={isCollapsible == false ? icon.up : icon.down}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTicket;

const styles = StyleSheet.create({
  iconContainer: {
    width: 14,
    height: 14,
  },
});
