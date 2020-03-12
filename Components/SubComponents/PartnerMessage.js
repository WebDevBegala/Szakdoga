
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

function PartnerMessage(props) {
    return (
        <View >
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} >
                <View>
                    <FontAwesome name="user" style={{ fontSize: 30, marginRight: 10 }} />
                </View>
                <View style={{ minHeight: 40, backgroundColor: "lightblue", borderRadius: 20, maxWidth: 200, padding: 10, justifyContent: "center" }}>
                    <Text style={{ textAlign: "left", fontSize: 17 }} >{props.message}</Text>
                </View>
            </View>
            <View style={{ marginLeft: 40 }} >
                <Text style={{ textAlign: "left", color: "gray" }} >{props.date}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

})

export default PartnerMessage;