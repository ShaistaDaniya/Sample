// LoginScreen.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhoneNumber } from '../actions/action';
import { View, Text, TextInput, Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
  }

  handleSubmit = () => {
    const { phoneNumber } = this.state;
    this.props.setPhoneNumber(phoneNumber);
  };

  render() {
    return (
      <View>
        <Text>Enter your Phone Number:</Text>
        <TextInput
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          value={this.state.phoneNumber}
        />
        <Button onPress={this.handleSubmit} title="Login" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPhoneNumber: phoneNumber => dispatch(setPhoneNumber(phoneNumber)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
