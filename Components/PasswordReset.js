/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import Animated from 'react-native-reanimated';
import FriendRow from "./SubComponents/FriendRow";
import SearchedResults from './SubComponents/SearchedResults'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Dimensions, Easing } from 'react-native'

let deviceHeight = Dimensions.get('window').height
class PasswordReset extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };

        this.inputRef = React.createRef();
    }


    changePassword(){
        let oldPassword =this.state.password;
        let newPassword = this.state.newPassword;
        let newPasswordSec = this.state.newPasswordT;

        if(newPassword === newPasswordSec){

            let data = {
                email: this.props.userData.onLogined.userData.email,
                password: oldPassword,
                newPassword:newPassword
            }

            data = JSON.stringify(data);

            this.props.changePassword(data);
        }
        else{

        }
    }

    render() {

        return (

            <View >
                <TouchableWithoutFeedback style={{ zIndex: 0 }} >

                    <View style={styles.main} >
                        <TouchableOpacity style={{width:30,margin:25}} onPress={()=>this.props.goToPage("Home")} >
                            <FontAwesome name="chevron-left" style={{fontSize: 20,padding:20 }} />
                        </TouchableOpacity>
                        <TextInput placeholder="Régi jelszó" placeholderTextColor="gray" style={[styles.input, { marginTop: "20%" }]} 
                        onChangeText={(text)=>this.setState({password:text})}/>
                        <TextInput placeholder="Új jelszó" placeholderTextColor="gray" style={styles.input} 
                        onChangeText={(text)=>this.setState({newPassword:text})}/>
                        <TextInput placeholder="Új jelszó mégegyszer" placeholderTextColor="gray" style={styles.input} 
                        onChangeText={(text)=>this.setState({newPasswordT:text})}/>

                        <TouchableOpacity style={{ backgroundColor: "lightblue", marginTop: 100, marginHorizontal: "20%", padding: 10, paddingVertical: 15, borderRadius: 20 }}
                        onPress={()=>this.changePassword()}  >
                            <View>
                                <Text style={{ textAlign: "center", color: "black" }} >
                                    jelszó változtatás
                                 </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </TouchableWithoutFeedback>
            </View >
        );
    }
};



const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        zIndex: 2
    },
    input: {
        borderColor: "black",
        borderWidth: 2,
        marginTop: '10%',
        padding: 10,
        marginHorizontal: "20%",
        borderRadius: 20
    }

});

export default PasswordReset;
