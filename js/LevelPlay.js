import React from 'react';
import { View, Text, StyleSheet,
         ScrollView, TextInput } from "react-native";

import FlexContainer from "./Container";
import colors from "./colors";

import HTMLView from 'react-native-htmlview';

class LevelPlay extends React.Component {
  render() {
    let { onChangeText, before, after, values, keys } = this.props;

    return (
      <FlexContainer style={styles.play}>
        <View style={styles.darkLine} />

        <FlexContainer style={styles.editorContainer}>
          <ScrollView>
            <HTMLView
              value={"<p>" + before + "</p>"}
              stylesheet={styles}
            />

            {
              keys.map((key) => {
                return (
                  <View
                    style={styles.inputRow}
                    key={key}
                  >
                    <TextInput
                      value={values[key] || ''}
                      onChangeText={(value) => onChangeText(key, value)}
                      style={styles.input}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <Text>,</Text>
                  </View>
                )
              })
            }

            <HTMLView
              value={"<p>" + after + "</p>"}
              stylesheet={styles}
            />
          </ScrollView>
        </FlexContainer>
      </FlexContainer>
    )
  }
}

let styles = StyleSheet.create({
  play: {
    flexDirection: 'row'
  },
  darkLine: {
    backgroundColor: colors.darkGrey,
    width: 20,
  },
  editorContainer: {
    backgroundColor: colors.lightGrey,
    padding: 5
  },
  inputRowContainer: {
    marginHorizontal: 10,
    marginVertical: 2
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 58
  },
  input: {
    flex: 1,
    height: 28,
    fontSize: 15,
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderColor: colors.lightGrey,
    paddingLeft: 6
  },
  p: {
    color: colors.darkGrey,
    fontSize: 13
  }
})

export default LevelPlay;
