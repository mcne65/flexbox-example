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

class Playground extends React.Component {

  render() {
    let {
      language,
      onLanguageChange,
      onGoToGame,
      onGoToPlayground
    } = this.props;

    return (
      <View style={{padding: 15, flex: 1}}>
        <Text style={styles.title}>
          PLAYGROUND
        </Text>
        <Text>under construction!</Text>
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

export default Playground;
