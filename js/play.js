import React, {
  View,
  ScrollView,
  StyleSheet,
  Component
} from "react-native"

import FlexContainer from "./Container";
import colors from "./colors";
import shallowEqual from "./shallowEqual";

import LevelDisplay from "./LevelDisplay";
import LevelInstruction from "./LevelInstruction";
import LevelPlay from "./LevelPlay";

import levels from "./levels";
import getMessage from "./messages";
import docs from "./docs";


import NextLevel from "./NextLevel";

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
    return {
      ...i,
      ...n
    }
  }, {})

}

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attempt: '',
      values: {}
    }
  }

  render() {
    let {
      langguage,
      attempt,
      values
    } = this.state;

    let {
      language,
      level,
      onGoToLevel,
      onGoToHome
    } = this.props;


    let playLevel = levels[level];
    let parsedAttempt = parseValues(values);
    let instruction = levels[level].instructions[language]

    return (
      <FlexContainer>
        <FlexContainer style={styles.pond}>
          <LevelDisplay 
            level={playLevel}
            attempt={parsedAttempt}
          />
        </FlexContainer>
        <FlexContainer>

          <FlexContainer>
            <ScrollView>
              <LevelInstruction 
                instruction={instruction}
              />
            </ScrollView>
          </FlexContainer>
          <FlexContainer>
            <LevelPlay
              onChangeText={(key, value) => {
                let updateValues = {
                  ...this.state.values
                };
                updateValues[key] = value;
                this.setState({
                  values: updateValues
                });

              }.bind(this)}
              values={values}
              before={playLevel.before}
              after={playLevel.after}
              keys={Object.keys(playLevel.style)}
            />
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
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: 10
  }
});