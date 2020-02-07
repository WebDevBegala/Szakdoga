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
import FriendRow from "./SubComponents/FriendRow";

class ChatPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: ""
        };


    }
    

    refreshMessages(data) {
        let currentState = this.state;
        currentState.messages = data;
        this.setState(currentState)
    }


    _messages() {
        console.log(this.state);

        for (let i = 0; i < this.state.messages.length; i++) {
            return (<View>
                <Text style={{ color: "black", margin: 10 }} >{this.state.messages[i]}</Text>
            </View>)
        }


    }

    sendMessage() {
        let cState = this.state;
        this.props.sendMessage(cState.newMessage)
        cState.newMessage = ""

        this.setState(cState)
    }
    render() {
        return (
            <View >
                <View style={styles.main} >
                    <Text>{this.props.messages.length}</Text>
                    <View>
                        <View>
                            <View style={{ flexDirection: "column", margin: 30 }} >
                                {
                                    this.props.messages.map((e, i) => {
                                        return (<Text key={i} style={{ color: "black", margin: 10 }} >{e}:{i}</Text>)
                                    })
                                }
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
                        <TextInput placeholder="Üzenet" placeholderTextColor="black" style={{ borderColor: "black", borderWidth: 2, borderRadius: 20, padding: 10, color: "black" }}
                            onChangeText={(text) => this.setState({ newMessage: text })} value={this.state.newMessage} />
                        <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "green", padding: 10, borderRadius: 20 }} onPress={() => this.sendMessage()} >
                            <Text style={{ color: "white" }} >Küldés</Text>
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
    }
});

export default ChatPage;
