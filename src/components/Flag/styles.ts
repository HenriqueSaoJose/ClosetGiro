import { StyleSheet } from "react-native";
import { Themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Themes.Colors.red,
        borderRadius: 4
    },
    caption: {
        color: '#FFF'
    }
})
