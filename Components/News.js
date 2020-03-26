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
import { vh } from '../Others/ViewPorts';
import { getCurrentDate } from '../Others/CurrentDate';

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            date: new Date()
        };
    }

   getSchedule(){
       alert("asd")
       let data = {
           from: this.state.from,
           to: this.state.to,
           date: getCurrentDate()
       }

       data = JSON.stringify(data);
       this.props.searchSchedule(data);
    
   }

    render() {
        let schedule = this.props.userData.schedule;
        return (
            <View >
                <View style={styles.main} >
                    <View style={{marginTop:vh(7)}} >
                        <TouchableOpacity activeOpacity={0.8} style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 20, marginHorizontal: "10%", marginTop: 10 }} >
                            <View style={{ padding: 10 }} >
                                <TextInput placeholder="Honnan szeretne utazni" placeholderTextColor="gray"
                                onChangeText={(text)=>this.setState({from:text})} value={this.state.from} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 20, marginHorizontal: "10%", marginTop: 30 }} >
                            <View style={{ padding: 10 }} >
                            <TextInput placeholder="Hova szeretne utazni" placeholderTextColor="gray"
                             onChangeText={(text)=>this.setState({to:text})} value={this.state.to} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "lightblue", marginHorizontal: "30%", padding: 12, borderRadius: 20, marginTop: 30 }} 
                         onPress={()=>this.getSchedule()} >
                            <Text style={{ textAlign: "center" }} >Keresés</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: vh(3) }} >
                        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ justifyContent: "center" }} horizontal >
                           {
                               
                               schedule ? schedule.map((e,i)=>{
                                      return(<RoadCard key={i} fromTime={e.fromTime} toTime={e.toTime} />)
                                })
                             : <Text>Nincs találat</Text>
                           }
                        </ScrollView>
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
    searchInput: {
        backgroundColor: "lightgray",
        marginHorizontal: "20%",
        padding: 10,
        borderRadius: 20,
        marginVertical: 20
    },

});

export default News;
