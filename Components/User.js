import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
            images: [
                { key: 0, data: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { key: 1, data: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" },
                { key: 2, data: "https://i.pinimg.com/originals/e2/b8/2a/e2b82aded815e80351b929a77519adaa.jpg" },
                { key: 3, data: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
            ]
        };
    }

    componentDidMount() {
       //Navigation.get();
    }

    goBack() {
        this.props.navigation.goBack()
    }

    imageLongPressed(e) {
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
                                this.state.images.map((e, i) => {
                                    return (
                                        <Images uri={e.data} key={i} iKey={e.key} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.info} >
                        <View style={styles.header} >
                            <View>
                                <TouchableOpacity>
                                    <FontAwesome name="chevron-left" style={{ fontSize: 20, padding: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.nameAndAge} >
                                <Text style={{ fontSize: 20 }} >Valaki Béla</Text>
                                {
                                    true ? (<Text style={{ fontSize: 20 }} >19</Text>) : null
                                }
                            </View>
                        </View>
                        <View>
                            <Text style={styles.descText}> Hello!
                            asd
                            asd
                            </Text>
                        </View>
                        <View style={styles.requestMenu} >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "20%", alignItems: "center", marginVertical: "2%" }} >
                                <FontAwesome style={{ fontSize: 17 }} name="user-plus" />
                                <Text style={{ fontSize: 17 }} >barátnak jelölés</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>

        );
    }
};

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10
    };
}


const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor: "white"
    },
    info: {
        backgroundColor: "white",
        height: vh(70),
        width: vw(100),
        position: "absolute",
        marginTop: vh(35),
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    header: {
        margin: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "1%"
    },
    nameAndAge: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: vw(35),
        marginRight: vw(3)
    },
    descText: {
        marginHorizontal: "10%",
        fontSize: 17,
        flexWrap: "wrap",
        marginTop: vh(5)
    },
    requestMenu: {
        ...elevationShadowStyle(5),
        height: vh(5),
        marginHorizontal: vw(20),
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: vh(30),

    }

});

export default ChatPage;
