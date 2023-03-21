import React from 'react';
import { StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert, } from 'react-native';

const LoginButton = (props) => {
  return (
    <Button
     onPress={() => Alert.alert('Login')}
     title="Login"
     color="#000000"
    accessibilityLabel="Press to login"
    />
  );
};

export default LoginButton;