import React, {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableOpacity
} from "react-native"

import colors from "./colors";


export default class NextLevel extends Component {
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
    paddingHorizontal: 80
  },
  disable: {
    opacity: .5
  },
  text: {
    color: '#FFF'
  }
})