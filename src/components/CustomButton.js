import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default CustomButton = ({ onPress, style, textStyle, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}
        >
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '#f59f00',
        alignItems: 'center',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        margin: 0,
        paddingVertical: 0,
        paddingHorizontal: 16,
    },
    title: {
        color: '#fff',
        fontWeight: '600'
    }
});