import React, { Component } from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  // Text,
} from 'react-native';

import Header from './src/components/Header';
import ImageCard from './src/components/ImageCard';
import { w, h } from './src/constans';

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';

export default class App extends Component {
  state = {
    title: 'FILM LIST',
    data: [],
  };

  componentDidMount() {
    const makeRequest = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        await this.setState({
          data,
        });
      } catch (e) {
        console.log(e);
      }
    };
    makeRequest();
  }

  render() {
    const { title, data } = this.state;
    const { conteiner } = styles;
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <View style={conteiner}>
            {data.map(item => {
              return <ImageCard key={item.id} data={item} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 150,
  },
});
