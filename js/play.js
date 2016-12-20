import React from 'react';
import { View, StyleSheet, Text,
         LayoutAnimation, Modal } from "react-native";

import FlexContainer from "./Container";
import LevelDisplay from "./LevelDisplay";
import LevelPlay from "./LevelPlay";
import NextLevel from "./NextLevel";
import InstructionModal from "./InstructionModal";

import docs from "./docs";
import colors from "./colors";
import levels from "./levels";
import getMessage from "./messages";
import shallowEqual from "./shallowEqual";

let validProperties = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  alignItems: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
  flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
  alignContent: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'],
  // flexFlow: [],

  flex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  alignSelf: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'],
  flexGrow: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  flexShrink: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  // flexBasis: [],
  order: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

let isLevelWon = (style, attempt) => {
  return shallowEqual(style, attempt);
}

let parseAttempt = (style) => {
  let parsedStyle = (style || '').split(':');
  let retStyle = {};
  let value = (parsedStyle[1] || '').replace(/[\'\"\s]/g, '');

  // check attribute
  if (validProperties[parsedStyle[0]] && value) {
      // check attribute value
      if (validProperties[parsedStyle[0]].indexOf(value) !== -1) {
        retStyle[parsedStyle[0]] = value;
      }
  }

  return retStyle;
}

let parseValues = (values) => {
  const keys = Object.keys(values);
  const rawValues = keys.map(key => values[key]);
  const parsedValues = rawValues.map(value => parseAttempt(value));
  const reducedValues = parsedValues.reduce((i, n) => {
    return { ...i, ...n };
  }, {});

  return reducedValues;
  // return [];
}

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempt: '',
      values: {},
      modalOpen: false,
    }

    this.changeText = this.changeText.bind(this);
    this.toggleHelpModal = this.toggleHelpModal.bind(this);
  }

  changeText(key, value) {
    let updateValues = { ...this.state.values };

    updateValues[key] = value;
    LayoutAnimation.spring();
    this.setState({
      values: updateValues
    });
  }

  toggleHelpModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    let { langguage, attempt, values } = this.state;
    let { language, level, onGoToLevel, onGoToHome } = this.props;
    let playLevel = levels[level];
    let parsedAttempt = parseValues(values);
    let instruction = levels[level].instructions[language]

    return (
      <FlexContainer>
        <InstructionModal
          level={level + 1}
          name={levels[level].name}
          visible={this.state.modalOpen}
          language={language}
          handleClose={this.toggleHelpModal}
          instruction={instruction}
        />

        <FlexContainer style={[styles.pond, {flex: 2, padding: 5}]}>
          <LevelDisplay
            level={playLevel}
            attempt={parsedAttempt}
          />
        </FlexContainer>

        <FlexContainer>
          <LevelPlay
            onChangeText={this.changeText}
            values={values}
            before={playLevel.before}
            after={playLevel.after}
            keys={playLevel.finish ? [] : Object.keys(playLevel.style)}
          />

          <View style={styles.helpButton}>
            <NextLevel
              win={true}
              onPress={this.toggleHelpModal}
            >
              {getMessage('help', language)}
            </NextLevel>
          </View>

          <View style={styles.nextButton}>
            <NextLevel
              win={isLevelWon(playLevel.style, parsedAttempt)}
              onPress={() => {
                if (!isLevelWon(playLevel.style, parsedAttempt)) return;
                if (playLevel.name === 'win') return onGoToHome()
                onGoToLevel(level + 1);
              }}
            >
              {getMessage('next', language)}
            </NextLevel>
          </View>
        </FlexContainer>
      </FlexContainer>
    )
  }
}

Play.defaultProps = {
  level: 0
}

let styles = StyleSheet.create({
  pond: {
    backgroundColor: colors.blue
  },
  nextButton: {
    paddingVertical: 5,
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  helpButton: {
    paddingVertical: 5,
    position: 'absolute',
    right: 10,
    bottom: 40
  }
});

export default Play;
