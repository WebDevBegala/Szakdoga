
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
import NavigationService from "../../NavigationService";

function FriendRow(props) {

    function goToChat() {
        let to = props.email

        NavigationService.navigate("ChatPage", { to })
    }

    return (

        <View >
            <TouchableOpacity style={styles.main} onPress={() => goToChat()} >
                <View style={styles.contentRow} >
                    <View>
                        <View style={{ borderColor: "black", borderWidth: 1, borderRadius: 100, width: 80, height: 80,marginLeft:-10, justifyContent: "center"}} >
                            <FontAwesome name="user" style={{ fontSize: 20, alignSelf: "center" }} />
                        </View>
                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-around",height:"100%"}} >
                        <View style={{flexDirection:"row",width:280,alignItems:"center",justifyContent:"space-around"}} >
                            <Text style={{ textAlign: "center",fontSize:17,marginLeft:5 }} >{props.email}</Text>
                            <Text style={{ textAlign:"right",marginLeft:60,marginRight:10 }} >2018.02.10</Text>
                        </View>
                        <View>


                            {props.active == 0 ?
                                (
                                    <TouchableOpacity style={{ backgroundColor: "lightblue", padding: 5, borderRadius: 10 }} onPress={() => props.friendRequest(props.email)} >
                                        <Text>Jelölés</Text>
                                    </TouchableOpacity>
                                )
                                : props.active == 1 ?
                                    (
                                        <Text style={{marginBottom:20,marginLeft:10}} >Baráti kérelmet küldött</Text>
                                    )
                                    : (null)

                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    main: {
        height: 90,
        width: "100%",
        backgroundColor: "rgba(50,200,255,0.2)",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        marginVertical:10

    },
    contentRow: {
        marginHorizontal: "5%",
        flexDirection:"row",
        alignItems:"center"
    }
});

export default FriendRow;
