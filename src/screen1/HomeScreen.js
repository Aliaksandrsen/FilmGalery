import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from '../components/Header';
import ImageCard from '../components/ImageCard';

import { STARGATE_DETAILS } from '../routes';
// import { w, h } from '../constans';

const url = 'http://api.tvmaze.com/search/shows?q=war';

export default class HomeScreen extends Component {
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
    const { navigation } = this.props;
    const { conteiner } = styles;
    return (
      <View>
        <Header
          title={title}
          colorRight={'#fff'}
          iconRight="magnify"
          nPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <View style={conteiner}>
            {data.map(item => {
              return (
                <ImageCard
                  key={item.show.id}
                  data={item.show}
                  onPress={() =>
                    navigation.navigate(STARGATE_DETAILS, item.show)
                  }
                />
              );
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
