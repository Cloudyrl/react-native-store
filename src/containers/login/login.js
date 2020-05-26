import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import CustomInput from '../../components/input/customInput';
import CustomButton from '../../components/button/customButton';
import loginUser from '../../api/loginUser';
import imageLogo from '../../assets/vintage2.png';


const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async () =>{
    const response = await loginUser({email,password});
    if(response){
      console.log('done!!')
      const {jwt,user:{username}} = response.data;
      const user = {username,token : jwt};
      console.log(user);
    }else{
      console.log('error')
    }
  }


  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />
      <View style={styles.form}>
        <CustomInput placeholder="Email" onChangeText={value =>{setEmail(value)}}/>
        <CustomInput placeholder="Password" onChangeText={value =>{setPassword(value)}} textContentType="password" secureTextEntry={true}/>
        <CustomButton title="submit" onPress={handleLogin}/>
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
