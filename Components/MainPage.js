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
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import Animated from 'react-native-reanimated';
import FriendRow from "./SubComponents/FriendRow";
import SearchedResults from './SubComponents/SearchedResults'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Dimensions, Easing } from 'react-native'

let deviceHeight = Dimensions.get('window').height
class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            animation: {
                active: false,
                height: new Animated.Value(0),
                default: true
            }
        };

        this.inputRef = React.createRef();
    }


    componentDidMount() {
        let myData = this.props.userData.onLogined;
        let cState = this.state;
        cState = Object.assign(cState, myData)
        this.setState(cState)
    }

    search() {

        let data = this.state.searchText;

        if (data.length > 0 || data.length == undefined) {
            data = { text: data };
            data = JSON.stringify(data)
            this.props.searchUser(data)
        }
        else {
            alert("Írj be valamit")
        }

    }

    _startAnimation(isActive) {
        Animated.timing(this.state.animation.height, {
            toValue: 700,
            duration: 500
        }).start()
    }

    _backAnimation() {
        Animated.timing(this.state.animation.height, {
            toValue: 20,
            duration: 500
        }).start()
    }

    startSearch(isActive) {
        let cState = this.state.animation;
        cState.active = isActive;
        cState.default = isActive


        if (isActive) {
            this.setState({ searchText: "" })
            this.inputRef.current.blur()
        }
        this.setState({ animation: cState })
        console.log(this.state)
    }

    friendRequest(email) {
        let data = {
            fromId: this.props.userData.onLogined.userData.email,
            toId: email
        }
        data = JSON.stringify(data);
        this.props.friendRequest(data);
    }

    test() {
        console.log("ads");

    }
    render() {
        const friends = this.props.userData.friends ? Object.assign(this.props.userData.onLogined.friends, this.props.userData.friends) : this.props.userData.onLogined.friends;
        console.log(friends);
        
        return (

            <View >
                <TouchableWithoutFeedback style={{ zIndex: 0 }} onPress={() => { this.startSearch(true) }} >
                    <View style={styles.main} >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                            <View style={styles.searchInput} >
                                <FontAwesome name="search" style={{ fontSize: 16, marginHorizontal: "2%" }} />
                                <TextInput ref={this.inputRef} style={{ color: "black", paddingHorizontal: 10 }} placeholder="Keresés" placeholderTextColor="gray"
                                    onChangeText={(text) => this.setState({ searchText: text })} value={this.state.searchText} onTouchStart={() => this.startSearch(false)} />
                            </View>
                            {
                                this.state.animation.default ?
                                    (
                                        <View style={styles.accountIcon} >
                                            <FontAwesome name="user" style={{ fontSize: 25 }} />
                                        </View>
                                    ) : (
                                        <TouchableOpacity style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 20, paddingHorizontal: 20 }} onPress={() => this.search()}  >
                                            <Text style={{ textAlign: "center" }} >Keresés</Text>
                                        </TouchableOpacity>
                                    )

                            }

                        </View>





                        <View style={{ marginTop: 20, marginHorizontal: "5%" }} >
                            <ScrollView contentContainerStyle={{ paddingBottom: "20%" }} >
                                {

                                    this.state.animation.default ? (friends.map((e, i) => {
                                        return (
                                            <FriendRow key={i} email={e.email} active={e.active} chatPage={() => alert("asd")} />
                                        )
                                    }))
                                        : (this.props.userData.searched.map((e, i) => {
                                            return (
                                                <FriendRow key={i} email={e} active={0} friendRequest={(email) => this.friendRequest(email)} chatPage={() => alert("asd")} />
                                            )
                                        }))

                                }
                            </ScrollView>
                        </View>
                        {
                            //<SearchedResults active={this.state.animation.active} results={this.props.userData.searched} clicked={(email) => this.friendRequest(email)} />
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View >
        );
    }
};



const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        zIndex: 2
    },
    searchInput: {
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 20,
        marginVertical: 20,
        width: "50%",
        flexDirection: "row",
        alignItems: "center"
    },
    searchResults: {
        backgroundColor: "lightgray",
        height: '80%',
        borderRadius: 20
    },
    accountIcon: {
        height: "40%",
        width: "15%",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MainPage;
