import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

const LoginScreen = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.logoimg} source={require('./assets/logo.png')}/>
        </View>
        <UsernameInput
          onChangeText={this.handleUsernameChange}
          style={styles.usernameInput}
        />
        <PasswordInput
          onChangeText={this.handleUsernameChange}
          style={styles.passwordInput}
        />
        <View style={styles.buttonContainer}>
          <LoginButton style={styles.button}/>
          <RegisterButton style={styles.button}/>
        </View>
  
        <Text>Forgot your password? <Text onPress={ () => Alert.alert('Sounds like a personal problem') } style = {{ color: '#00008B' }}>Click here.</Text></Text>
  
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '80%',
      marginLeft: '10%'
    },
  
    logo: {
      width: '100%',
      height: '30%',
      alignItems: 'center'
    },
  
    logoimg: {
      width: '100%',
      height: '35%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    usernameInput: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      padding: 10,
      width: '100%',
    },
  
    passwordInput: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      padding: 10,
      width: '100%',
      marginTop: '3%',
    },
  
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: '30%',
      marginTop: 5,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  
    button: {
      backgroundColor: '#007aff',
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });