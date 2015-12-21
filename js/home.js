import React, {
  View,
  Component,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native"

import getMessage from "./messages"
import images from "./images"
import colors from "./colors"
import LanguagePicker from "./LanguagePicker";

let {
  width
} = Dimensions.get('window');


export default class Home extends Component {

  render() {
    let {
      language,
      onLanguageChange,
      onGoToGame
    } = this.props;

    return (
      <View style={{padding: 15, flex: 1}}>
        <View style={styles.languageSpacer} />
        <Text style={styles.title}>{getMessage('title', language)}</Text>
        <View style={{height: 175, flexDirection: 'row'}}>
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

        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={onGoToGame}>
          <View style={styles.start}>
            <Text style={styles.startText}>{getMessage('next', language)}</Text>
          </View>
        </TouchableOpacity>


        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text>RN FlexboxFroggy adpated by Jason Brown (browniefed)</Text>
          <Text>FlexboxFroggy created by Thomas Park</Text>
        </View>


        <LanguagePicker
          style={styles.language}
          language={language}
          onLanguageChange={onLanguageChange}
        />


      </View>
    )
  }
}


let styles = StyleSheet.create({
  title: {
    fontSize: 42,
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
    paddingHorizontal: 80
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
    left: 10
  },
  languageSpacer: {
    height: 30
  }
})