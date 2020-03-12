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
    Image,
    DatePickerAndroid,
    DatePickerIOS
} from 'react-native';
import RoadCard from "./SubComponents/RoadCard";
import LinearGradient from 'react-native-linear-gradient';

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            date: new Date()
        };
    }

    logout(){
       
        this.props.goToPage("Login");
       
    }
  
    render() {

        return (
            <View >
                <View style={styles.main} >
                    <View>
                        <Text style={{fontSize:30,marginTop:100}} >Valaki Pista</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{backgroundColor:"lightblue",padding:10,marginHorizontal:"20%",borderRadius:20,marginTop:"10%"}}
                        onPress={()=>this.props.goToPage("PasswordReset")} >
                            <Text style={{textAlign:"center"}} >Jelszó változtatás</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"lightblue",padding:10,marginHorizontal:"20%",borderRadius:20,marginTop:"10%"}}
                        onPress={()=>this.props.goToPage("ImagesHandling")} >
                            <Text style={{textAlign:"center"}} >Képek kezelése</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"lightblue",padding:10,marginHorizontal:"20%",borderRadius:20,marginTop:"10%"}}
                        onPress={()=>this.logout()} >
                            <Text style={{textAlign:"center"}} >Kilépés</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};



const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor: "white"
    },
   
});

export default Account;
