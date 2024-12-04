import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default OutlineTextButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.outlineButton}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outlineButton: {
        height: 48,
        borderWidth: 1,
        borderColor: '#1f4788',
        borderRadius: 4,
        margin: 0,
        paddingVertical: 0,
        paddingHorizontal: 16,
        transition: '100ms linear',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f4788',
    }
});