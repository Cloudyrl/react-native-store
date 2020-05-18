import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomInput from '../../components/input/customInput';
import CustomButton from '../../components/button/customButton';
import imageLogo from '../../assets/vintage2.png';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />
      <View style={styles.form}>
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" />
        <CustomButton title="submit"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex:1,
    justifyContent: 'center',
    width: '80%',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Login;
