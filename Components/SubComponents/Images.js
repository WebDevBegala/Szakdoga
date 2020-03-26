
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { vw } from '../../Others/ViewPorts';

function Images(props) {
    const [selected,setSelected] = useState(0);
    const getKey = () => {
        return props.iKey
    }
   

    return (

        <View style={{ width: vw(100) }} >
            <TouchableWithoutFeedback onLongPress={() => setSelected(1)} >
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: props.uri }} />
            </TouchableWithoutFeedback>
            {
                console.log(selected),
                selected===1 ? (
                <View style={styles.selectedImage} >
                    <TouchableOpacity activeOpacity={0.4} style={{
                        marginHorizontal: "30%",
                        marginTop: "30%",
                    }} onPress={()=>props.getImageKey(getKey())} >
                        <View style={styles.deletebtn} >
                            <FontAwesome name="trash" style={{ fontSize: 30 }} />
                            <Text style={{ fontSize: 30 }} >Törlés</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} style={{
                        marginHorizontal: "40%",
                        marginTop: "20%",
                        alignContent: "center"
                    }} onPress={() => setSelected(0)} >
                        <View style={styles.deletebtn} >
                            <FontAwesome name="close" style={{ fontSize: 20 }} />
                            <Text style={{ fontSize: 20 }} >Mégse</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                ):null
            }

        </View>

    )
};


const styles = StyleSheet.create({
    selectedImage: {
        backgroundColor: "rgba(255,255,255,0.5)",
        width: "100%",
        height: "100%",
        zIndex: 10,
        position: "absolute",
    },
    deletebtn: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",

    }
})

export default Images;