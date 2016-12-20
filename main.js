import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, View, Navigator,
         Platform, UIManager } from "react-native";
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Play from "./js/play"
import Home from "./js/home"
import Playground from "./js/playground"
import levels from "./js/levels"
import docs from "./js/docs"
import messages from "./js/messages"
import colors from "./js/colors"

let routes = {
  home: {component: Home},
  play: {component: Play},
  playground: {component: Playground}
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

function renderScene(
  Comp, language, level,
  onGoToGame, onGoToLevel,
  onGoToHome, onGoToPlayground
) {
  return (
      <Comp
        language={language}
        level={level}
        onGoToHome={onGoToHome}
        onGoToGame={onGoToGame}
        onGoToLevel={onGoToLevel}
        onGoToPlayground={onGoToPlayground}
      />
  );
}

class FlexboxFroggy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en'
    }
  }

  render() {
    let onGoToGame = () => this.refs.navigator.push(routes.play);
    let onGoToPlayground = () => this.refs.navigator.push(routes.playground);
    let onGoToHome = () => {
      this.refs.navigator.immediatelyResetRouteStack([]);
      this.refs.navigator.push(routes.home);
    }
    let onGoToLevel = (level) => {
      this.refs.navigator.push({ ...routes.play, level })
    };

    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          style={styles.spacer}
          initialRoute={routes.home}
          renderScene={route => renderScene(route.component, this.state.language, route.level, onGoToGame, onGoToLevel, onGoToHome, onGoToPlayground)}
        />

        { Platform.OS === 'ios' && <KeyboardSpacer /> }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue
  },
  spacer: {
    marginTop: 32
  }
});

Exponent.registerRootComponent(FlexboxFroggy);
