import React from 'react';
import { View, StyleSheet } from "react-native";

import FlexContainer from "./Container";
import colors from "./colors";

import HTMLView from 'react-native-htmlview';

class LevelInstruction extends React.Component {
  render() {
    let {
      instruction
    } = this.props;

    return (
      <FlexContainer style={styles.instruction}>
        <HTMLView
          value={instruction}
          stylesheet={styles}
        />
      </FlexContainer>
    )
  }
}

let styles = StyleSheet.create({
  p: {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  li: {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  code: {
    backgroundColor: 'rgba(255,255,255, .2)',
    fontWeight: '900',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  instruction: {
    padding: 5
  }
});

export default LevelInstruction;
