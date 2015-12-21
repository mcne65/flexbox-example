import React, {
  View,
  ScrollView,
  StyleSheet,
  Component
} from "react-native"

import FlexContainer from "./Container";
import colors from "./colors";

import LevelDisplay from "./LevelDisplay";
import LevelInstruction from "./LevelInstruction";
import LevelPlay from "./LevelPlay";

import levels from "./levels";
import messages from "./messages"
import docs from "./docs";

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      attempt: ''
    }
  }

  render() {
    let {
      level,
      langguage,
      attempt
    } = this.state;

    let {
      language
    } = this.props;


    let playLevel = levels[level];

    let instruction = levels[level].instructions[language]

    return (
      <FlexContainer>
        <FlexContainer style={styles.pond}>
          <LevelDisplay 
            level={playLevel}
            attempt={attempt}
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
              onChangeText={(attempt) => this.setState({attempt})}
              value={attempt}
              before={playLevel.before}
              after={playLevel.after}
            />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    )
  }
}


let styles = StyleSheet.create({
  pond: {
    backgroundColor: colors.blue
  }
});