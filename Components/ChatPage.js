/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import FriendRow from "./SubComponents/FriendRow";
import MyMessage from "./SubComponents/MyMessage";
import PartnerMessage from "./SubComponents/PartnerMessage";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { getCurrentTime } from "../Others/CurrentDate";
import { vw, vh } from "../Others/ViewPorts";

class ChatPage extends React.Component {
    static navigationOptions = {
        header: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: "",

        };


    }


    refreshMessages(data) {
        let currentState = this.state;
        currentState.messages = data;
        this.setState(currentState)
    }

    componentDidMount() {
        let toId = this.props.navigation.getParam("to");
        let fromId = this.props.userData.onLogined.userData.email;
        this.setState({ to: toId, from: fromId })
        let data = {
            fromId: fromId,
            toId: toId
        }

        data = JSON.stringify(data)
        this.props.getMessages(data)
    }

    goBack() {
        this.props.navigation.goBack()
    }

    _messages() {
        let from = this.props.userData.onLogined.userData.id
        let messages = []
        let currentMessages = this.props.messages
        console.log("Messages: ", currentMessages)
        currentMessages.map((e, i) => {
            if (Number(e.fromID) == Number(from) || e.fromId == this.state.from) {


                messages.push(
                    <MyMessage key={i} message={e.message} date={e.date} />
                )

            }
            else {

                messages.push(
                    <PartnerMessage key={i} message={e.message} date={e.date} />
                )

            }
        })

        return messages
    }

    sendMessage() {
        let cState = this.state;
        let d = new Date();
        let data = {
            fromId: cState.from,
            toId: cState.to,
            message: cState.newMessage,
            datum: getCurrentTime()
        }

        data = JSON.stringify(data);

        this.props.sendMessage(data)
        cState.newMessage = ""

        this.setState(cState)
    }


    render() {
        return (
            <View >
                <View style={{ height: 150 }} >
                    <LinearGradient colors={['#0398fc', '#3b5998', '#8800ff']} style={{ height: "100%" }} >

                    </LinearGradient>
                </View>
                <View style={styles.main} >

                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <TouchableOpacity style={{ margin: 15, padding: 5, width: 30 }} onPress={() => this.goBack()} >
                            <FontAwesome name="chevron-left" style={{ fontSize: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, textAlign: "right", width: "75%" }} >{this.state.to}</Text>
                    </View>
                    <View style={{ height: "60%",marginBottom:30 }} >
                        <ScrollView  >
                            <View  >
                                {
                                    this._messages()
                                }
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.inputField} >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "5%" }} >

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 60 }} >
                                <TouchableOpacity onPress={() => this.selectImage()} >
                                    <FontAwesome name="image" style={{ color: "#3b5998", fontSize: 25 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome name="smile-o" style={{ color: "#3b5998", fontSize: 25 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignSelf: "center" }} >
                                <TextInput placeholder="Üzenet..." placeholderTextColor="#3b5998" style={{ width: 240, padding: 10, fontSize: 20, color: "black" }}
                                    onChangeText={(text) => this.setState({ newMessage: text })} value={this.state.newMessage} />
                            </View>
                            <TouchableOpacity onPress={() => this.sendMessage()} >
                                <FontAwesome name="send" style={{ color: "#3b5998", fontSize: 25 }} />
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: "white",
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30
    },
    inputField: {
        width: "95%",
        borderColor: "#3b5998",
        borderWidth: 2,
        height: 50,
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: vh(75),
        position: "absolute"

    }
});

export default ChatPage;
/*<View style={{ flexDirection: "column", height: "82%", marginHorizontal: "5%" }} >
                                <ScrollView>
                                    <View>
                                        {
                                            //this._messages()
                                            this._messages()
                                        }
                                    </View>
                                </ScrollView>
                            </View>*/