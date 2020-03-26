
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
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function RoadCard(props) {
    return (

        <View >
            <View style={styles.shadow}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: '5%', marginTop: 60 }} >
                    <Text style={{ fontSize: 17 }} >Honnan:</Text>
                    <Text style={{ fontSize: 17 }} >Airline station</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: '5%', marginTop: 20 }} >
                    <Text style={{ fontSize: 17 }} >Hova:</Text>
                    <Text style={{ fontSize: 17 }} >Airline station</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: '5%', marginTop: 20 }} >
                    <Text style={{ fontSize: 17 }} >Indulás:</Text>
                    <Text style={{ fontSize: 17 }} >{props.fromTime}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: '5%', marginTop: 20 }} >
                    <Text style={{ fontSize: 17 }} >Érkezés:</Text>
                    <Text style={{ fontSize: 17 }} >{props.toTime}</Text>
                </View>
                <View style={{ height: "30%", justifyContent: "space-around", marginTop: 20 }} >
                    <TouchableOpacity style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 20, marginHorizontal: "5%", paddingVertical: 15 }}
                    >
                        <Text style={{ textAlign: "center" }} >Utazás ezzel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 20, marginHorizontal: "5%", paddingVertical: 15 }}
                    >
                        <Text style={{ textAlign: "center" }} >Emberek akik ezzel utaznak</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
};

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10
    };
}

const styles = StyleSheet.create({
    shadow: {
        ...elevationShadowStyle(5),
        backgroundColor: 'white',
        height: 450,
        width: 250,
        marginHorizontal: 30,
        borderRadius: 20,
        marginTop: 30,

    }
})

export default RoadCard;