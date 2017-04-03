import React from 'react';
import { View, Text, Image,
         StyleSheet, TouchableOpacity,
         Dimensions } from "react-native";

import getMessage from "./messages"
import images from "./images"
import colors from "./colors"

let { width } = Dimensions.get('window');

class Home extends React.Component {
  render() {
    let { language, onGoToGame, onGoToPlayground } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            {getMessage('title', language)}
          </Text>
          <Text style={styles.subtitle}>
            {getMessage('subtitle', language)}
          </Text>
        </View>

        <View style={styles.frogsContainer}>
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
              <Text style={styles.startText}>
                {getMessage('play', language)}
              </Text>
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

        <View style={styles.footer}>
          <Text style={styles.footerText}>Extended by Rmotr 🚀</Text>
          <Text style={styles.footerSubtext}>Adapted by Jason Brown (browniefed)</Text>
          <Text style={styles.footerSubtext}>Created by Thomas Park</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,.8)',
    textAlign: 'center',
    paddingHorizontal: 10
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,.8)',
    textAlign: 'center'
  },
  frogsContainer: {
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  imageContainer: {
    flex: 1,
    margin: 10
  },
  start: {
    backgroundColor: colors.lightBlue,
    paddingVertical: 15,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  startText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600'
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
  },
  footer: {
    alignItems: 'center'
  },
  footerText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600'
  },
  footerSubtext: {
    color: '#EEE',
    fontSize: 12
  }
})

export default Home;
