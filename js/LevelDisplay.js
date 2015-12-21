import React, {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Component
} from "react-native"

import FlexContainer from "./Container";
import images from "./images";

let validProperties = [
  'flexDirection',
  'justifyContent',
  'alignSelf',
  'alignItems',
  'flexWrap'
]

let keyMap = {
  'flex-direction': validProperties[0],
  'justify-content': validProperties[1],
  'align-self': validProperties[2],
  'align-items': validProperties[3],
  'flex-wrap': validProperties[4]
}


let colorMap = {
  'g': 'green',
  'r': 'red',
  'y': 'yellow'
};


let parseStyle = (style) => {

  let keys = Object.keys(style);
  let retStyle = {};

  keys.forEach((key) => {
    retStyle[keyMap[key]] = style[key];
  })

  return retStyle;
}

let parseAttempt = (style) => {
  let parsedStyle = (style || '').split(':');
  let retStyle = {};

  if (validProperties.indexOf(parsedStyle[0]) !== -1) {
    retStyle[parsedStyle[0]] = (parsedStyle[1] || '').replace(/[\'\"\s]/g, '')
  }

  return retStyle;
}

let getImageLinks = (board, append) => {
  return board.split('').map((piece) => {
    return images[(colorMap[piece] + append)]
  })
}

let getImages = (images) => {
  return images.map(image => <Image key={image} source={{uri: image}} style={{width: 100, height: 100}} />)
}

export default class LevelDisplay extends Component {

  render() {
    let {
      attempt,
      level
    } = this.props;
    
    let {
      board,
      style
    } = level;

    return (
      <FlexContainer>
        <FlexContainer style={[styles.absolute, parseAttempt(attempt)]}>
          {getImages(getImageLinks(board, 'Frog'))}
        </FlexContainer>
        <FlexContainer style={[styles.absolute, parseStyle(style)]}>
          {getImages(getImageLinks(board, 'Lilly'))}
        </FlexContainer>
      </FlexContainer>
    )
  }
}


let styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  }
});