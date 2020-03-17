import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';

import { searchChanged } from '../actions';

import { STARGATE_DETAILS } from '../routes';
// import { w, h } from '../constans';

const url = 'http://api.tvmaze.com/search/shows?q=war';

class HomeScreen extends Component {
  state = {
    title: 'FILM LIST',
    data: [],
    visibleSearchbar: false,
    text: 'movie',
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

  // onSearchChange = text => {
  //   console.log(text);
  //   this.setState({
  //     text: text,
  //   });
  // };

  render() {
    const { title, data, visibleSearchbar } = this.state;
    const { navigation } = this.props;
    const { conteiner } = styles;
    console.log(this.props);

    return (
      <View>
        {visibleSearchbar ? (
          <SearchBar
            colorRight="#fff"
            iconRight="magnify"
            placeholder="Search"
            // onChangeText={this.onSearchChange}
            onChangeText={this.props.searchChangedd}
            //! value={this.state.text}
            onPressRight={() => this.setState({ visibleSearchbar: false })}
            onBlur={() => this.setState({ visibleSearchbar: false })}
          />
        ) : (
          <Header
            title={title}
            colorRight={'#fff'}
            iconRight="magnify"
            onPressRight={() => this.setState({ visibleSearchbar: true })}
          />
        )}
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

// const mapStateToProps = () => {

// };

const mapDispatchToProps = dispatch => {
  return {
    searchChangedd: text => dispatch(searchChanged(text)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(HomeScreen);
