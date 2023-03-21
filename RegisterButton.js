import React from 'react';
import { StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert, } from 'react-native';

const RegisterButton = (props) => {
  return (
    <Button
     onPress={() => Alert.alert('Register')}
     title="Register"
     color="#000000"
    accessibilityLabel="Press to Register"
    />
  );
};

export default RegisterButton;