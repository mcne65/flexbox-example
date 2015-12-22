import React, {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Component,
  Dimensions
} from "react-native"

import FlexContainer from "./Container";
import images from "./images";

let {
  width,
  height
} = Dimensions.get('window');

let colorMap = {
  'g': 'green',
  'r': 'red',
  'y': 'yellow'
};

let getMeasurement = (value, amount) => Math.min(Math.floor((value/3)/amount), 75)

let getImageLinks = (board, append) => {
  return board.split('').map((piece) => {
    return images[(colorMap[piece] + append)]
  })
}

let getImages = (images, styleMap = {}) => {
  return images.map(image => 
      <Image 
        source={{uri: image}} 
        style={[{width: getMeasurement(width, images.length), height: getMeasurement(height, images.length)}, (styleMap[image] || {})]} 
        resizeMode="contain"
      /> 
  )
}

let getSelectorStyle = (selector, append, style) => {
  let map = {};
  getImageLinks(selector, append).forEach((key) => map[key] = style);
  return map;
}

export default class LevelDisplay extends Component {

  render() {
    let {
      attempt,
      level
    } = this.props;
    
    let {
      board,
      style,
      defaultStyle,
      selector
    } = level;

    let pondStyle = !selector ? style : {};
    let pondAttempt = !selector ? {...defaultStyle, ...attempt} : {};

    let selectorStyle = selector ? getSelectorStyle(selector, 'Lilly', style) : {};
    let selectorAttempt = selector ? getSelectorStyle(selector, 'Frog', {...defaultStyle, ...attempt}) : {};

    return (
      <FlexContainer>
        <FlexContainer style={[styles.absolute, pondStyle]}>
          {getImages(getImageLinks(board, 'Lilly'), selectorStyle)}
        </FlexContainer>
        <FlexContainer style={[styles.absolute, pondAttempt]}>
          {getImages(getImageLinks(board, 'Frog'), selectorAttempt)}
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