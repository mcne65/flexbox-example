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

let getMeasurement = (value, amount) => Math.min(Math.floor((value/2)/amount), 1
  
let getImageLinks = (board, append) => {
  return board.split('').map((piece) => {
    return images[(colorMap[piece] + append)]
  })
}

let getImages = (images, ) => {
  return images.map(image => 
      <Image 
        source={{uri: image}} 
        style={{width: getMeasurement(width, images.length), height: getMeasurement(height, images.length)}} 
        resizeMode="contain"
      /> 
  )
}
00)

export default class LevelDisplay extends Component {

  render() {
    let {
      attempt,
      level
    } = this.props;
    
    let {
      board,
      style,
      defaultStyle
    } = level;

    return (
      <FlexContainer>
        <FlexContainer style={[styles.absolute, style]}>
          {getImages(getImageLinks(board, 'Lilly'))}
        </FlexContainer>
        <FlexContainer style={[styles.absolute, {...defaultStyle, ...attempt}]}>
          {getImages(getImageLinks(board, 'Frog'))}
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