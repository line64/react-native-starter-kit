import {
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {

    return (

      <View style={ styles.view }>

        <Text style={ styles.title }>Welcome!</Text>

        <Text style={ styles.subtitle }>You have successfully installed React Native's starter kit</Text>

      </View>

    );

  }

}

const styles = {
  view: {
    flex: 1,
    height: 300,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 30
  }
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Home);
