import React, {
  AppRegistry,
  StyleSheet,
  View,
  Component,
  Navigator
} from "react-native";

import Play from "./js/play"
import Home from "./js/home"
import levels from "./js/levels"
import docs from "./js/docs"
import messages from "./js/messages"
import colors from "./js/colors"

var KeyboardSpacer = require('react-native-keyboard-spacer');

let routes = {
  home: {component: Home},
  play: {component: Play}
}

function renderScene(Comp, language, level, onLanguageChange, onGoToGame, onGoToLevel, onGoToHome) {
  return (
      <Comp
        language={language}
        level={level}
        onLanguageChange={onLanguageChange}
        onGoToHome={onGoToHome}
        onGoToGame={onGoToGame}
        onGoToLevel={onGoToLevel}
      />
  );
}

class FlexboxFroggy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en'
    }
  }



  render() {

    let onLanguageChange = (language) => this.setState({language});
    let onGoToGame = () => this.refs.navigator.push(routes.play)
    let onGoToHome = () => {
      this.refs.navigator.immediatelyResetRouteStack([]);
      this.refs.navigator.push(routes.home);
    }
    let onGoToLevel = (level) => this.refs.navigator.push(
    {
      ...routes.play,
      level
    }
    )

    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          style={styles.spacer}
          initialRoute={routes.home}
          renderScene={route => renderScene(route.component, this.state.language, route.level, onLanguageChange, onGoToGame, onGoToLevel, onGoToHome)}
        />
        <KeyboardSpacer />

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green
  },
  spacer: {
    marginTop: 32
  }
});

// AppRegistry.registerComponent('main', () => FlexboxFroggy);
Exponent.registerRootComponent(FlexboxFroggy);
