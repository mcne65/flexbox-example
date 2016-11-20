import React from 'react';
import { View, StyleSheet } from "react-native";

const languages = ['en', 'de', 'pt-br', 'es', 'fr', 'ru', 'fa', 'zh-cn', 'tr', 'it', 'ko', 'lt'];

import DropDown from 'react-native-dropdown';
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

class LanguagePicker extends React.Component {
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
          style={styles.select}
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
  select: {
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  optionList: {
    backgroundColor: '#FFF'
  }
})

export default LanguagePicker;
