import React from 'react';
import {
  SafeAreaView,
  // Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { w } from '../constans';

const SearchBar = ({
  iconRight,
  colorRight,
  onPressRight,
  onChangeText,
  placeHolder,
  value,
  onBlur,
}) => {
  const {
    container,
    sub,
    iconRightStyle,
    rightButtonTouchableOpacity,
    inputStyle,
    searchStyle,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={sub}>
        <TextInput
          style={inputStyle}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          value={value}
          onBlur={onBlur}
        />
        <TouchableOpacity
          style={rightButtonTouchableOpacity}
          onPress={onPressRight}>
          <View style={searchStyle}>
            <MaterialCommunityIcons
              name={iconRight}
              style={[iconRightStyle, { color: colorRight }]}
              color={colorRight}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f49f30',
    height: 116,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: -12,
    alignItems: 'center',
    flexDirection: 'row',
    width: w - 35,
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 20,
  },
  inputStyle: {
    fontSize: 18,
    width: w - 90,
    marginLeft: 15,
    backgroundColor: '#ffffff',
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  rightButtonTouchableOpacity: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    zIndex: 2,
  },
  // ! возможно переделать
  iconRightStyle: {
    alignSelf: 'flex-end',
    // marginBottom: -10,
    fontSize: 35,
  },
});

export default SearchBar;
