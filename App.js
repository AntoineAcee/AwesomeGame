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

import Enemy from './app/components/Enemy';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movePlayerValue: new Animated.Value(60),
      playerSide: 'left',
      points: 0,

      moveEnemyValue: new Animated.Value(0),
      enemyStartPosX: 0,
      enemySide: 'left',
      enemySpeed: 4200,

      gameOver: false,
    };
  }

  render() {
    return (
      <ImageBackground source={require('./app/img/bg.jpg')} style={styles.container}>

        <View style={{ flex: 1, alignItems: 'center', marginTop: 80 }}>
          <View style={styles.points}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#666' }}> {this.state.points} </Text>
          </View>
        </View>

        <Animated.Image source={require('./app/img/main_car.png')}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          zIndex: 1,
          bottom: 0,
          resizeMode: 'stretch',
          transform: [
            { translateX: this.state.movePlayerValue }
          ]
        }}></Animated.Image>

        <Enemy enemyImg={require('./app/img/car_one.png')}
        enemyStartPosX={this.state.enemyStartPosX}
        moveEnemyValue={this.state.moveEnemyValue} />


        <View style={styles.controls}>
          <Text style={styles.left} onPress={ () => this.movePlayerValue('left') }> {'<'} </Text>
          <Text style={styles.right} onPress={ () => this.movePlayerValue('right') }> {'>'} </Text>
        </View>

      </ImageBackground>
    );
  }

  movePlayerValue(direction) {
    // Move to right
    if (direction == 'right') {
      this.setState({ playerSide: 'right' })
    
      Animated.spring(
        this.state.movePlayerValue,
        {
          toValue: Dimensions.get('window').width - 160,
          tension: 120,
        }
      ).start();
    } else if (direction == 'left') {
      this.setState({ playerSide: 'left' })
    
      Animated.spring(
        this.state.movePlayerValue,
        {
          toValue: 60,
          tension: 120,
        }
      ).start();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover',
  },
  points: {
    width: 80,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 100,
  },
  right: {
    flex: 1,
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  left: {
    flex: 1,
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});
