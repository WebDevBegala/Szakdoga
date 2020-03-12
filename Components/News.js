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

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            date: new Date()
        };
    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    render() {

        return (
            <View >
                <View style={styles.main} >
                    <TouchableOpacity activeOpacity={0.8} style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 20, marginHorizontal: "10%", marginTop: 10 }} >
                        <View style={{ padding: 10 }} >
                            <Text style={{ color: "gray" }} >Honnan szeretnél utazni</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 20, marginHorizontal: "10%", marginTop: 30 }} >
                        <View style={{ padding: 10 }} >
                            <Text style={{ color: "gray" }} >Hova szeretnél utazni</Text>
                        </View>
                    </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"lightblue",marginHorizontal:"30%",padding:12,borderRadius:20,marginTop:30}} >
                <Text style={{textAlign:"center"}} >Keresés</Text>
            </TouchableOpacity>

                    <View style={{ marginTop: "5%" }} >
                        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ justifyContent: "center" }} horizontal >
                          <RoadCard />
                          <RoadCard />
                          <RoadCard />
                          <RoadCard />
                          <RoadCard />
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
