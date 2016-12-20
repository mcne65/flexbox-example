import React from 'react';
import { View, Text, Image,
         StyleSheet, TouchableOpacity, Dimensions,
         ScrollView } from "react-native";
import colors from "./colors";
import Toggle from "./Toggle";

let {
  width
} = Dimensions.get('window');

class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.changeBox = this.changeBox.bind(this);
  }

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    q: 3
  }

  changeBox() {
    if (this.state.q === 3) {
      this.setState({q: 9});
    } else if (this.state.q === 9) {
      this.setState({q: 3});
    }
  }

  render() {
    const {flexDirection, justifyContent, alignItems, flexWrap} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems, flexWrap};

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    let boxes;
    if (this.state.q === 3) {
      boxes = (
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      );
    } else if (this.state.q === 9) {
      boxes = (
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Flexbox Playground
          </Text>
          <Text
            style={styles.subtitle}
            onPress={this.changeBox}
          >
            {this.state.q === 3 ? '➕' : '➖'}
          </Text>
        </View>

        <Toggle
          label={'flexDirection: Primary axis'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={'justifyContent: (' + primaryAxis + ' distribution)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={'alignItems: (' + secondaryAxis + ' alignment)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <Toggle
          label={'flexWrap'}
          value={flexWrap}
          options={['wrap', 'nowrap']}
          onChange={(option) => this.setState({flexWrap: option})}
        />

        {boxes}
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  },
  title: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
    marginHorizontal: 5
  },
  subtitle: {
    color: '#FFF'
  },
  layout: {
    flex: 1,
    marginTop: 10,
    backgroundColor: colors.blue,
  },
  box: {
    padding: 25,
    backgroundColor: colors.green,
    margin: 5,
  },
});

export default Playground;
