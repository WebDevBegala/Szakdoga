
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableWithoutFeedback, Easing
} from 'react-native'; import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function PartnerMessage(props) {

    let size = new Animated.Value(1);
    let rotateVal = new Animated.Value(0)

    function anim() {
        Animated.sequence([
            Animated.timing(size, { toValue: 1.3 }),
            Animated.timing(size, { toValue: 0.8 }),
        ]).start(() => anim())
    }
    function rootAnim() {
        Animated.sequence([
            Animated.timing(rotateVal, { toValue: 20,duration:5000}),
            Animated.timing(rotateVal, { toValue: 0,duration:5000}),
          
        ]).start(() => rootAnim())
    }
    anim()
    rootAnim()
    return (

        <View style={styles.root}  >

            <Animated.View style={[styles.AnimatedRoot,{transform:[{rotateZ:rotateVal}]}]} >
                <Animated.View style={{ flexDirection: "row", margin: -40, justifyContent: "center" }} >
                    <Animated.View style={[styles.loadingIcon, { backgroundColor: "#0398fc", transform: [{ scale: size }] }]} ></Animated.View>
                </Animated.View>
                <Animated.View style={{ flexDirection: "row", justifyContent: "center" }} >
                    <Animated.View style={[styles.loadingIcon, { backgroundColor: "#3b5998", transform: [{ scale: size }] }]} ></Animated.View>
                    <Animated.View style={[styles.loadingIcon, { backgroundColor: "#8800ff", transform: [{ scale: size }] }]} ></Animated.View>
                </Animated.View>
            </Animated.View>

        </View >

    )
};

const styles = StyleSheet.create({
    root: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(180,180,180,0.7)",
        position: "absolute",
        zIndex: 9
    },
    loadingIcon: {
        height: 30,
        width: 30,
        borderRadius: 100,
        margin: 10
    },
    AnimatedRoot: {
        flexDirection: "column",
        marginHorizontal: "20%",
        justifyContent: "space-around",
        marginTop: "80%",
    }
})

export default PartnerMessage;