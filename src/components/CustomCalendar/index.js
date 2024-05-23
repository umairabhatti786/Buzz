import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import { scale, verticalScale } from "react-native-size-matters";
import CustomModal from "../CustomModal";
import CategoryItem from "../../screens/main/Customer/CustomerHome/CategoryItem";
import { image } from "../../assets/png/images";
// import {Calendar, LocaleConfig} from 'react-native-calendars';
import { windowWidth } from "../../utils/Commons";
import { Calendar, CalendarList, Agenda ,LocaleConfig} from 'react-native-calendars';
import { colors } from "../../utils/colors";
import { icon } from "../../assets/png/icons";
import CustomLine from "../CustomLine/CustomLine";
import DashedLine from "react-native-dashed-line";
// Configure custom day names
LocaleConfig.locales['en'] = {
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
    dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    dayNamesShort: ['S','M','T','W','T','F','S'], // Single-letter day names
  };
  LocaleConfig.defaultLocale = 'en';
  
  const CustomCalendar = ({
    modalVisible,
    handelModal,
    setModalVisible,
    selectedObject,
    navigation,
    title,
  }) => {
    const [selected, setSelected] = useState('2024-03-15');
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
        // setCurrentDate(formattedDate);
        setCurrentMonth(today.toISOString().split('T')[0].slice(0, 7)); // Format the date as YYYY-MM
      }, [modalVisible]);
    const onDayPress = (day) => {
      setSelected(day.dateString);
    };
        const categoryData = [
      { name: "Need a Ride", img: image.ride },
      { name: "Retail Store Delivery", img: image.retailstore },
      { name: "Local Delivery", img: image.delivery },
      { name: "Furniture Delivery", img: image.furniture },
      { name: "Auto Parts Delivery", img: image.autoparts },
      { name: "Office Moving", img: image.office },
      { name: "Building Materials", img: image.materials },
    ];
    const renderCustomHeader = (date) => {
        const month = date.toString('MMMM yyyy').split(' ')[0];
        const year = date.toString('MMMM yyyy').split(' ')[1];
        return (
          <View style={styles.headerContainer}>
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{month}</Text>
              <Image
              source={icon.down}
              style={{width:15,height:15}}
              />
            </View>
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{year}</Text>

              <Image
              source={icon.down}
              style={{width:15,height:15}}
              />
            </View>
          </View>
        );
      };

      const onMonthChange = (month) => {
        setCurrentMonth(month.dateString.slice(0, 7)); // Format the date as YYYY-MM
      };
    
      const renderArrow = (direction) => {
        return (

<Image
              source={  direction === 'left' ?icon.backIcon:icon.formardIcon}
              style={{width:16,height:16}}
              resizeMode="contain"
              />
          
        );
      };
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"From Date"}
        width={"100%"}
      >
        <View style={{height:400 }}>
          {/* {categoryData.map((item, index) => {
            return (
              <View
                style={{
                  margin:10
               
                }}
              >
                <CategoryItem
                  selectedCategory={selectedCategory}
                  index={index}
                  img={item.img}
                  name={item.name}
                  onPress={() => setSelectedCategory(index)}
                />
              </View>
            );
          })} */}

<Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
      style={{width:windowWidth/1.2,        height: 350,
    }}
    renderArrow={renderArrow}

      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#000',
        textDayFontFamily:"700",
        selectedDayBackgroundColor: '#12D1AF',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#12D1AF',
        textDayFontSize:18,
        textMonthFontSize:20,
        dayTextColor: '#000',
        
        textDayHeaderFontSize: 16, // Font size of the day header text

        textDayHeaderFontWeight: 'bold', // Font weight of the day header text

        textDayFontWeight:"600",
        textDisabledColor: '#AAAAAA'
      }}
    //   disableArrowLeft={true}
    //   disableArrowRight={true}
      onMonthChange={onMonthChange}

      
    

      renderHeader={renderCustomHeader} // Use custom header

      
    />

<DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
        </View>
      </CustomModal>
    );
  };
  
  export default CustomCalendar;
  
  const styles = StyleSheet.create({
    dayHeaderText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        // backgroundColor:"red",
        width:windowWidth/1.7
      },
      monthContainer: {
        paddingHorizontal: 10,
        width:110,
        paddingVertical: 8,
        borderRadius: 5,
        borderWidth:1.5,
        borderColor:colors.black40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        gap:10,
      },
      yearContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'lightgrey',
      },
      monthText: {
        fontSize: 15,
        fontWeight: '700',
        color:colors.gray
      },
      yearText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      arrow: {
        fontSize: 24,
      },
      leftArrow: {
        color: 'red', // Change this color to your preferred color for the left arrow
      },
      rightArrow: {
        color: 'green', // Change this color to your preferred color for the right arrow
      },
        
  });
  