import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { w } from '../constans';

const Header = ({
  iconLeft,
  iconRight,
  colorLeft,
  colorRight,
  title,
  onPressLeft,
  onPressRight,
}) => {
  const {
    container,
    textStyle,
    iconLeftStyle,
    iconRightStyle,
    leftButtonTouchableOpacity,
    rightButtonTouchableOpacity,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <TouchableOpacity
        style={leftButtonTouchableOpacity}
        onPress={onPressLeft}>
        <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
      </TouchableOpacity>

      <TouchableOpacity
        style={rightButtonTouchableOpacity}
        onPress={onPressRight}>
        <MaterialCommunityIcons
          name={iconRight}
          style={[iconRightStyle, { color: colorRight }]}
          color={colorRight}
        />
      </TouchableOpacity>

      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
        {title}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
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
    paddingBottom: 15,
  },
  leftButtonTouchableOpacity: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    zIndex: 2,
  },
  rightButtonTouchableOpacity: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    zIndex: 2,
  },
  iconLeftStyle: {
    marginBottom: -50,
    fontSize: 35,
  },
  iconRightStyle: {
    alignSelf: 'flex-end',
    marginBottom: -40,
    fontSize: 35,
  },
});

export default Header;
