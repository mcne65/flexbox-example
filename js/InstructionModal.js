import React from 'react';
import { View, StyleSheet, ScrollView,
         Modal, Text, Picker } from "react-native";

import FlexContainer from "./Container";
import NextLevel from "./NextLevel";
import LevelInstruction from "./LevelInstruction";

import colors from "./colors";
import getMessage from "./messages";

class InstructionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: this.props.level
    }
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <FlexContainer style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.level}>
              Level: {this.state.level}
            </Text>
            <Text style={styles.name}>
              ({this.props.name})
            </Text>

            <LevelInstruction
              instruction={this.props.instruction}
            />

            <Picker
              style={{backgroundColor: 'rgba(255,255,255,0.7)'}}
              selectedValue={this.state.level}
              onValueChange={(level) => this.setState({level})}>
              <Picker.Item label="Level 1" value={1} />
              <Picker.Item label="Level 2" value={2} />
              <Picker.Item label="Level 3" value={3} />
              <Picker.Item label="Level 4" value={4} />
              <Picker.Item label="Level 5" value={5} />
            </Picker>
          </ScrollView>
        </FlexContainer>

        <View style={styles.changeLevel}>
          <NextLevel
            style={{backgroundColor: 'green'}}
            win={true}
            onPress={this.props.handleClose}
          >
            Change
          </NextLevel>
        </View>

        <View style={styles.closeButton}>
          <NextLevel
            win={true}
            onPress={this.props.handleClose}
          >
            {getMessage('close', this.props.language)}
          </NextLevel>
        </View>
      </Modal>
    )
  }
}

let styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'rgba(2, 42, 53, 0.9)',
    margin: 5,
    marginTop: 40,
    padding: 10
  },
  level: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 45,
    right: 10
  },
  changeLevel: {
    position: 'absolute',
    top: 45,
    left: 10
  }
})

export default InstructionModal;
