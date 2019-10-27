import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
  ImageBackground
} from 'react-native';

export default class Enemy extends Component {

  render() {
    return (
        <Animated.Image source={this.props.enemyImg}
        style={{
          height: 120,
          width: 100,
          position: 'absolute',
          resizeMode: 'stretch',
          left: this.props.enemyStartPosX,
          transform: [
            { translateY: this.props.moveEnemyValue },
          ]
        }}></Animated.Image>
    );
  }
}