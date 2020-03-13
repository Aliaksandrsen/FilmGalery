import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onPress, leftIcon, leftColor }) => {
  const {
    viewStyle,
    textStyle,
    leftButtonStyle,
    leftButtonTouchableOpacity,
  } = styles;
  return (
    <SafeAreaView style={viewStyle}>
      <TouchableOpacity style={leftButtonTouchableOpacity} onPress={onPress}>
        <Ionicons name={leftIcon} style={leftButtonStyle} color={leftColor} />
      </TouchableOpacity>
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
        {title}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
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
  textStyle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    paddingLeft: 40,
    paddingRight: 40,
  },
  leftButtonTouchableOpacity: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    zIndex: 2,
  },
  leftButtonStyle: {
    marginBottom: -50,
    fontSize: 35,
  },
});

export default Header;
