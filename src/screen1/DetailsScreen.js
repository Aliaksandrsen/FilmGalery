import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';

export default class DetailsScreen extends Component {
  render() {
    console.log(this.props.navigation.state.params);
    const { image, name, summary, title } = this.props.navigation.state.params;

    return (
      <View>
        <Header title={name} />
        <Text> Hello world </Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}
