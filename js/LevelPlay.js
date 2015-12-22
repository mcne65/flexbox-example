import React, {
  View,
  StyleSheet,
  Component,
  TextInput
} from "react-native"

import FlexContainer from "./Container";
import colors from "./colors";

var HTMLView = require('react-native-htmlview')

export default class LevelPlay extends Component {
  render() {
    let {
      onChangeText,
      before,
      after,
      values,
      keys
    } = this.props;

    return (
      <FlexContainer style={styles.play}>
        <View style={styles.darkLine}>

        </View>
        <FlexContainer style={styles.editorContainer}>
            <HTMLView
              value={"<p>" + before + "</p>"}
              stylesheet={styles}
            />
            {
              keys.map((key) => {
                return (
                  <TextInput
                    value={values[key] || ''}
                    onChangeText={(value) => onChangeText(key, value)}
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                )
              })

            }

            <HTMLView
              value={"<p>" + after + "</p>"}
              stylesheet={styles}
            />
        </FlexContainer>
      </FlexContainer>
    )
  }
}

let styles = StyleSheet.create({
  play: {
    padding: 5,
    flexDirection: 'row'
  },
  darkLine: {
    backgroundColor: colors.darkGrey,
    width: 20
  },
  editorContainer: {
    backgroundColor: colors.lightGrey
  },
  input: {
    height: 20,
    backgroundColor: '#FFF',
    marginLeft: 8,
    marginRight: 58
  },
  p: {
    color: '#aaa',
    fontSize: 20
  }
})