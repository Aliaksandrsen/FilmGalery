import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { w } from '../constans';

const ImageCard = ({ data: { image, name } }) => {
  const img = `https${image.medium.slice(4)}`;
  const { conteiner, sub, text, cover } = styles;
  return (
    <View style={conteiner}>
      <View style={sub}>
        <Image style={cover} source={{ uri: img }} />
      </View>
      <Text style={text}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    alignItems: 'center',
    width: w / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    backgroundColor: '#ffffff',
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
    paddingTop: 10,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

export default ImageCard;
