/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { vh, vw } from '../Others/ViewPorts';
import RoadCard from "./SubComponents/RoadCard";
import { ScrollView } from 'react-native-gesture-handler';
import Images from "./SubComponents/Images";

class ChatPage extends React.Component {
    static navigationOptions = {
        header: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            images:[
                {key:0,data:"https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
                {key:1,data:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"},
                {key:2,data:"https://i.pinimg.com/originals/e2/b8/2a/e2b82aded815e80351b929a77519adaa.jpg"},
                {key:3,data:"https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
            ]
        };
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 0.6,
            base64: true
        });
        
        let imageData = 'data:image/jpeg;base64,' + result.base64;
        let data = {
            email: this.props.userData.onLogined.userData.email,
            image: result.base64
        }
        data = JSON.stringify(data);
        this.props.sendPictures(data)
        this.setState({ imageUri: 'data:image/jpeg;base64,' + result.base64 })
        let emailData = {email:this.props.userData.onLogined.userData.email};
        this.props.getImage(JSON.stringify(emailData));
    }

    goBack() {
        this.props.navigation.goBack()
    }

    imageLongPressed(e){
        alert("Fasza");
        console.log(e)
    }

    render() {
        return (
            <View >
                <View style={styles.main} >



                    <View style={{ height: 300, marginTop: 50 }} >
                        <ScrollView style={{ height: "100%" }} pagingEnabled contentContainerStyle={{ justifyContent: "center" }} horizontal >
                            {
                                this.props.userData.images ? this.props.userData.images.map((e,i)=>{
                                    return(
                                        <Images uri={e.uri} key={i} iKey={e.id} getImageKey={()=>alert(e.id)} />
                                    )
                                }):null
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.actions} >
                        <TouchableOpacity onPress={() => this._pickImage()} >
                            <View style={styles.imageAction} >
                                <FontAwesome name="plus" style={{ fontSize: 18 }} />
                                <Text style={{ fontSize: 18 }} >Kép hozzáadása</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={{
                        marginTop: vh(10), backgroundColor: "lightblue", flexDirection: "row", justifyContent: "space-around",
                        marginHorizontal: "30%", padding: 10, borderRadius: 20
                    }} onPress={() => this.goBack()} >
                        <FontAwesome name="chevron-left" style={{ fontSize: 20 }} />
                        <Text>Vissza</Text>
                    </TouchableOpacity>


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
    imageAction: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        fontSize: 20
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20
    }

});

export default ChatPage;
