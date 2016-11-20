import React from 'react';
import { View, Text, Image,
         StyleSheet, TouchableOpacity, Dimensions,
         ScrollView } from "react-native";

import getMessage from "./messages"
import images from "./images"
import colors from "./colors"
import LanguagePicker from "./LanguagePicker";

let {
  width
} = Dimensions.get('window');

class Home extends React.Component {

  render() {
    let {
      language,
      onLanguageChange,
      onGoToGame,
      onGoToPlayground
    } = this.props;

    return (
      <View style={{padding: 15, flex: 1}}>
        <View style={styles.languageSpacer} />
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

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{alignItems: 'stretch', justifyContent: 'center'}}
            onPress={onGoToGame}
          >
            <View style={styles.start}>
              <Text style={styles.startText}>{getMessage('next', language)}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'stretch', justifyContent: 'center', marginTop: 20}}
            onPress={onGoToPlayground}
          >
            <View style={styles.start}>
              <Text style={styles.startText}>{getMessage('playground', language)}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '600'}}>🚀 by Rmotr</Text>
          <Text style={{fontSize: 12}}>Adapted by Jason Brown (browniefed)</Text>
          <Text style={{fontSize: 12}}>Created by Thomas Park</Text>
        </View>


        <View style={styles.language}>
          <Text style={{paddingVertical: 5}} >Select Language:</Text>
          <LanguagePicker
            language={language}
            onLanguageChange={onLanguageChange}
          />
        </View>
      </View>
    )
  }
}


let styles = StyleSheet.create({
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
  },
  languageSpacer: {
    height: 30
  }
})

export default Home;
