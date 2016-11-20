import React from 'react';
import { View, Text, StyleSheet,
         TouchableOpacity } from "react-native";

import colors from "./colors";

class NextLevel extends React.Component {
  render() {
    let {
      win,
      onPress
    } = this.props;

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={win ? 0.5 : 1}>
        <View style={[styles.start, win ? {} : styles.disable ]}>
          <Text style={styles.text}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  start: {
    backgroundColor: colors.red,
    paddingVertical: 5,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disable: {
    opacity: .5
  },
  text: {
    color: '#FFF'
  }
})

export default NextLevel;
