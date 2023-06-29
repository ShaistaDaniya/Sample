// LoginComponent.js

import React from 'react';
import { View, Text, FormLabel, FormInput, Button } from 'react-native';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  handleSubmit = () => {
    const { userName, password } = this.state;
    const user = { userName, password };
    this.props.onLogin(user);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h4>Student Login</Text>
        <FormLabel>Enter your Email</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ userName: text })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          onPress={this.handleSubmit}
          buttonStyle={[{ marginBottom: 5, marginTop: 5 }]}
          title="Login"
        />
      </View>
    );
  }
}

export default LoginComponent;
