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

let validProperties = [
  'flexDirection',
  'justifyContent',
  'alignSelf',
  'alignItems',
  'flexWrap'
]

let isLevelWon = (style, attempt) => {
  return shallowEqual(style, attempt);
}

let parseAttempt = (style) => {
  let parsedStyle = (style || '').split(':');
  let retStyle = {};
  let value = (parsedStyle[1] || '').replace(/[\'\"\s]/g, '');

  if (validProperties.indexOf(parsedStyle[0]) !== -1 && value) {
    retStyle[parsedStyle[0]] = value;
  }

  return retStyle;
}

let parseValues = (values) => {
  return Object.keys(values).map((key) => values[key]).map(parseAttempt).reduce((i, n) => {
    return { ...i, ...n }
  }, {})

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
          visible={this.state.modalOpen}
          language={this.props.language}
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
            keys={Object.keys(playLevel.style)}
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
