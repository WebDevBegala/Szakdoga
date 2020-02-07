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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function FriendRow(props) {
    return (

        <View >
            <TouchableOpacity style={styles.main} >
                <View style={styles.contentRow} >
                    <FontAwesome name="user" style={{ fontSize: 20 }} />
                    <Text style={{ textAlign: "center" }} >{props.email}</Text>

                    {props.active == 0 ?
                        (
                            <TouchableOpacity style={{ backgroundColor: "lightblue", padding: 5, borderRadius: 10 }} onPress={() => props.friendRequest(props.email)} >
                                <Text>Jelölés</Text>
                            </TouchableOpacity>
                        )
                        : props.active == 1 ?
                            (
                                <Text>Baráti kérelmet küldött</Text>
                            )
                            : (null)

                    }

                </View>
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    main: {
        height: 50,
        width: "90%",
        backgroundColor: "rgba(50,200,255,0.2)",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        margin: 10,
       
    }, 
    contentRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal:"10%"
    }
});

export default FriendRow;
