import React, {
  View,
  Component,
  StyleSheet
} from "react-native"

const languages = ['en', 'de', 'pt-br', 'es', 'fr', 'ru', 'fa', 'zh-cn', 'tr', 'it', 'ko', 'lt'];

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

export default class LanguagePicker extends Component {
  componentDidMount() {
    updatePosition(this.refs.LANGUAGE);
    updatePosition(this.refs.OPTIONLIST);
  }
 
  render() {
    let {
      language, 
      onLanguageChange
    } = this.props;

    return (
      <View {...this.props}>
        <Select
          width={70}
          ref="LANGUAGE"
          optionListRef={() => this.refs.OPTIONLIST}
          defaultValue={language}
          onSelect={onLanguageChange}
          style={styles.option}
        >
          {languages.map((lang) => <Option key={lang}>{lang}</Option>)}
        </Select>
        <View style={styles.optionList}>
          <OptionList ref="OPTIONLIST"/>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  option: {
    backgroundColor: 'rgba(255,255,255, .5)'
  },
  optionList: {
    backgroundColor: '#FFF'
  }
})