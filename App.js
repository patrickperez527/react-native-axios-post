import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const App = () => {

  const source_url = 'https://reqres.in/api/users'

  const [fullName, setFullName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const postData = async () => {
    axios.post((source_url), {full_name:fullName, username:username, email:email, password:password})
    .then(response => console.log(response.data));
    alert('Registration Successful')
  };  

  return (
      <View style = {styles.container}>
          <View style = {styles.header}>
            <Text style = {styles.headerText}>Registration Form</Text>
          </View>
            <View style = {styles.propsContainer}>
              <LottieView autoPlay loop style = {styles.headerProps} source = {require('../post_API/assets/headerProps.json')}/>
            </View>
            <Text style = {styles.labelText}>Full Name</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={fullName => setFullName(fullName)}
                    value={fullName}
                    placeholder="Enter Full Name"
                    placeholderTextColor="silver"
                    autoCapitalize="words"
                    fontSize={20}
                    color="silver"
                />
            <Text style = {styles.labelText}>Username</Text>     
                <TextInput
                    style={styles.inputText}
                    onChangeText={username => setUsername(username)}
                    value={username}
                    placeholder="Enter Username"
                    placeholderTextColor="silver"
                    autoCapitalize="none"
                    fontSize={20}
                    color="silver"
                />
            <Text style = {styles.labelText}>Email</Text>     
                <TextInput
                    style={styles.inputText}
                    onChangeText={email => setEmail(email)}
                    value={email}
                    placeholder="Enter Email"
                    placeholderTextColor="silver"
                    autoCapitalize="none"
                    fontSize={20}
                    color="silver"
                />
            <Text style = {styles.labelText}>Password</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={password => setPassword(password)}
                    value={password}
                    placeholder="Enter Password"
                    placeholderTextColor="silver"
                    secureTextEntry={true}
                    password={true} 
                    fontSize={20}
                    color="silver"
                />
                  <TouchableOpacity onPress={() => postData()} >
                    <View style = {styles.btn}>
                      <Text style = {styles.btnText}>REGISTER</Text>
                    </View>
                  </TouchableOpacity>  
        </View>
  );
}; 
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1f29', 
    flex: 1,
    borderBottomWidth: 8,
    borderColor: '#058785',
  },
  header: {
    margin: 20, 
    alignItems: 'center', 
    borderWidth: 3, 
    borderColor: '#058785',
    borderRadius: 5, 
    padding: 8,
  },
  headerText: {
    color: 'white', 
    fontSize: 35,
    textShadowOffset: {
      width: 5, 
      height: 3
    },
    textShadowRadius: 10,
    textShadowColor: '#058785'
  },
  propsContainer: {
    alignItems: 'center', 
    marginBottom: 15, 
    borderBottomWidth: 8, 
    borderColor: '#058785'
  },
  headerProps: {
    width: 165, 
    height: 165,
  },
  labelText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 3,
    textShadowOffset: {
      width: 5, 
      height: 3
    },
    textShadowRadius: 10,
    textShadowColor: '#058785',
  },
  inputText: {
    height:47,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#058785',
    borderRadius: 7,
    padding: 10,
  },
  btn: {
    backgroundColor: '#058785',
    padding: 7,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 15,
    marginTop: 10,
  },
  btnText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20,
    textAlign: 'center',
    textShadowOffset: {
      width: 6, 
      height: 4
    },
    textShadowRadius: 10,
    textShadowColor: 'black'
  }
});
