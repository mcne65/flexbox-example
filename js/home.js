import React from 'react';
import { View, Text, Image,
         StyleSheet, TouchableOpacity, Dimensions,
         ScrollView } from "react-native";

import getMessage from "./messages"
import images from "./images"
import colors from "./colors"

let {
  width
} = Dimensions.get('window');

class Home extends React.Component {

  render() {
    let {
      language,
      onGoToGame,
      onGoToPlayground
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{getMessage('title', language)}</Text>
        <View style={{height: 100, flexDirection: 'row'}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: images.greenFrog}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: images.greenLilly}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: images.redFrog}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: images.redLilly}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: images.yellowFrog}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: images.yellowLilly}}
              resizeMode="contain"
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{alignItems: 'stretch', justifyContent: 'center'}}
            onPress={onGoToGame}
          >
            <View style={styles.start}>
              <Text style={styles.startText}>{getMessage('next', language)}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'stretch', justifyContent: 'center', marginTop: 15}}
            onPress={onGoToPlayground}
          >
            <View style={styles.start}>
              <Text style={styles.startText}>{getMessage('playground', language)}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '600'}}>🚀 by Rmotr</Text>
          <Text style={{fontSize: 12}}>Adapted by Jason Brown (browniefed)</Text>
          <Text style={{fontSize: 12}}>Created by Thomas Park</Text>
        </View>
      </View>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,.8)',
    textAlign: 'center'
  },
  imageContainer: {
    flex: 1,
    margin: 10
  },
  start: {
    backgroundColor: colors.red,
    paddingVertical: 15,
    alignItems: 'center'
  },
  startText: {
    color: '#FFF'
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  language: {
    position: 'absolute',
    top: 0,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default Home;
