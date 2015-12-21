import React, {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Component
} from "react-native"

import FlexContainer from "./Container";
import images from "./images";



let colorMap = {
  'g': 'green',
  'r': 'red',
  'y': 'yellow'
};


let getImageLinks = (board, append) => {
  return board.split('').map((piece) => {
    return images[(colorMap[piece] + append)]
  })
}

let getImages = (images, ) => {
  return images.map(image => 
      <Image 
        key={image} 
        source={{uri: image}} 
        style={{width: 100, height: 100}} 
      /> 
  )
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
        <FlexContainer style={[styles.absolute, style]}>
          {getImages(getImageLinks(board, 'Lilly'))}
        </FlexContainer>
        <FlexContainer style={[styles.absolute, attempt]}>
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