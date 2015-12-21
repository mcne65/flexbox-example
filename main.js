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

let routes = {
  home: {component: Home},
  play: {component: Play}
}

function renderScene(Comp, language, onLanguageChange, onGoToGame) {
  return (
      <Comp 
        language={language} 
        onLanguageChange={onLanguageChange}
        onGoToGame={onGoToGame}
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

    return (
      <View style={styles.container}>
        <Navigator 
          ref="navigator"
          style={styles.spacer}
          initialRoute={routes.home}
          renderScene={route => renderScene(route.component, this.state.language, onLanguageChange, onGoToGame)}
        />
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

AppRegistry.registerComponent('main', () => FlexboxFroggy);
