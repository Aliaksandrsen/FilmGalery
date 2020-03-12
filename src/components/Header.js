import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  const { viewStyle, textStyle } = styles;
  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
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
  },
});

export default Header;
