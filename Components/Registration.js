/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Registration extends React.Component {
  static navigationOptions = {
    header: false,
  }
  constructor(props) {
    super(props);
    this.state = {

    };


  }

  registration() {
    let registerData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    registerData = JSON.stringify(registerData)
    this.props.registration(registerData)
  }


  render() {
    return (
      <LinearGradient colors={['#0398fc', '#3b5998', '#8800ff']} style={styles.linearGradient}>
        <View style={{ backgroundColor: "white", borderRadius: 20, marginTop: "20%", padding: 20 }} >
          <View>
            <TouchableOpacity style={{padding:5,alignSelf:"flex-start"}} onPress={()=>this.props.goToPage("Login")} >
              <FontAwesome name="chevron-left" style={{ fontSize: 25 }} />
            </TouchableOpacity>
            <View style={styles.inputBlock} >
              <FontAwesome name="user" style={{ color: "gray", fontSize: 18 }} />
              <TextInput placeholder="Name" placeholderTextColor="gray" style={styles.textInput}
                onChangeText={(text) => this.setState({ name: text })} />
            </View>

            <View style={styles.inputBlock} >
              <FontAwesome name="envelope" style={{ color: "gray", fontSize: 18 }} />
              <TextInput placeholder="Email" placeholderTextColor="gray" style={styles.textInput}
                onChangeText={(text) => this.setState({ email: text })} />
            </View>
            <View style={styles.inputBlock} >
              <FontAwesome name="unlock" style={{ color: "gray", fontSize: 18 }} />
              <TextInput placeholder="Password" placeholderTextColor="gray" style={styles.textInput}
                onChangeText={(text) => this.setState({ password: text })} />
            </View>


            <TouchableOpacity style={styles.regBtn} onPress={() => this.registration()} >
              <View>
                <Text style={{ textAlign: "center", fontSize: 20 }} >Registration</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%"
  },
  textInput: {
    marginLeft: "10%",
    fontSize: 18,
    color:"black"
  },
  inputBlock: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginHorizontal: "15%",
    marginTop: "10%"
  },
  regBtn: {
    marginTop: "10%",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: "20%"
  }
});

export default Registration;
