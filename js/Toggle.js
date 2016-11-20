import React from 'react';
import { AppRegistry, View, Text,
         TouchableOpacity, StyleSheet } from 'react-native';
import colors from './colors';

class Toggle extends React.Component {
  onPress = (option) => {
    const {onChange} = this.props

    onChange(option)
  }

  renderOption = (option) => {
    const {value, options} = this.props

    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={this.onPress.bind(this, option)}
      >
        <Text style={styles.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {label, options} = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>
          ✨ {label}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 5,
    borderBottomWidth: 3,
    borderColor: colors.green
  },
  text: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500'
  },
  label: {
    padding: 4,
    fontSize: 13,
    fontWeight: '700'
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    padding: 4,
    backgroundColor: colors.blue,
  },
  activeOption: {
    backgroundColor: colors.green,
  },
})

export default Toggle;
