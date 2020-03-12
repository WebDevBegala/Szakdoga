import { Dimensions } from "react-native";

 export const screenWidth =Dimensions.get('window').width;
 export const screenHeight =Dimensions.get('window').height;

export function vh(px) {
    return (screenHeight / 100) * px
}
export function vw(px) {
    return (screenWidth / 100) * px
}