/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Animated

} from 'react-native';
import { Easing } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import FriendRow from "./FriendRow";
let deviceHeight = Dimensions.get('window').height

function SearchedResults(props) {

    var active = new Animated.Value(deviceHeight);

    useEffect(() => {
        if (props.active) {
            Animated.timing(active, {
                toValue: 0,
                duration: 500
            }).start(() => {
                console.log("Animáció 0", active)
            })
        }
        else {
            Animated.timing(active, {
                toValue: deviceHeight,
                duration: 500
            }).start(() => {
                console.log("Animáció 1", active)
            })
        }
    }, [props.active])

    return (
        <Animated.View style={[styles.root, { top: active}]} >
            <View style={{
                height: "100%",
                backgroundColor: "rgb(225,225,225)",
                zIndex: 9,
                borderRadius: 20,
            }} >
                <ScrollView>
                    {

                        props.results.map((e, i) => {
                            return (
                                <FriendRow key={i} email={e} active={0} chatPage={() => alert("asd")} friendRequest={(email) => props.clicked(email)} />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </Animated.View>

    )
};

const styles = StyleSheet.create({
    root: {
        height: "90%",
        zIndex: 8,
        marginTop: "10%"

    },
    main: {

    }
});

export default SearchedResults;
