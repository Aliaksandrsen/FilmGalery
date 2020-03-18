import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';

import { searchChanged, getMovies } from '../actions';

import { STARGATE_DETAILS } from '../routes';

class HomeScreen extends Component {
  state = {
    title: 'FILM LIST',
    visibleSearchbar: false,
  };

  onSearchChange = text => {
    this.props.searchChangedd(text);
    this.props.getMovies(text);
  };

  render() {
    const { title, visibleSearchbar } = this.state;
    const { navigation, movie, data } = this.props;
    const { conteiner } = styles;

    return (
      <View>
        {visibleSearchbar ? (
          <SearchBar
            colorRight="#fff"
            iconRight="magnify"
            placeholder="Search"
            onChangeText={this.onSearchChange}
            value={movie}
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

const mapStateToProps = state => {
  return {
    movie: state.search.movie,
    data: state.search.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchChangedd: text => dispatch(searchChanged(text)),
    getMovies: text => dispatch(getMovies(text)),
  };
};

// const mapDispatchToProps = {
//   searchChangedd: searchChanged,
//   getMovies: getMovies,
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
