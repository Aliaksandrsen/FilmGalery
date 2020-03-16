import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
import ImageBigCard from '../components/ImageBigCard';

import { w } from '../constans';

export default class DetailsScreen extends Component {
  render() {
    const { image, name, summary } = this.props.navigation.state.params;
    const { container, sub, h1, h2, scroll } = styles;
    const { navigation } = this.props;
    const data = { image, name };

    return (
      <View style={container}>
        <Header
          title={name}
          onPressLeft={() => navigation.goBack()}
          iconLeft="ios-arrow-back"
          colorLeft={'#ffffff'}
        />
        <ScrollView style={scroll}>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}> {name.toUpperCase()} </Text>
            <Text style={h2}> {summary.replace(/<[^>]+>/g, '')} </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 200,
    backgroundColor: '#ffffff',
  },
  scroll: {
    // flex: 1,
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10,
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15,
  },
});
