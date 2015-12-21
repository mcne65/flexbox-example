import React, {
  View,
  StyleSheet
} from "react-native";

export default class FlexContainer extends React.Component {
  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})