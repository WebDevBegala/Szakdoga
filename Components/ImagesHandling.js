/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


class ChatPage extends React.Component {
    static navigationOptions = {
        header: false,
    }
    constructor(props) {
        super(props);
        this.state = {

        };


    }
    goBack() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View >
                <View  >

                    <TouchableOpacity style={{ margin: 15, marginTop: 100, padding: 5, width: 30 }} onPress={() => this.goBack()} >
                        <FontAwesome name="chevron-left" style={{ fontSize: 20 }} />
                    </TouchableOpacity>

                    <Text style={{ marginTop: "10%", fontSize: 20, textAlign: "center" }} >Images</Text>
                    <TouchableOpacity onPress={() => this.selectImage()} >
                        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 260 }} >Select image</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: this.state.imageUri }} style={{ height: 300, width: 300, borderRadius: 20, marginLeft: 80 }} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30
    },

});

export default ChatPage;
