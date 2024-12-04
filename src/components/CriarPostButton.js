import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export default CriarPostButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('/criar-post');
            }}
            style={styles.button}
        >
            <Text style={styles.text}>Criar novo Post</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: "#1f4788",
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        paddingHorizontal: 16,
        fontWeight: '600',
    },
    text: {
        color: "#fff",
    }
});