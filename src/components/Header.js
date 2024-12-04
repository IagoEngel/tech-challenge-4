import { StyleSheet, Text, View } from "react-native";
import LoginButton from "./LoginButton";

export default Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <Text style={styles.textBold}>BloggingApp</Text>
                <LoginButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap',
        paddingVertical: 12,
        paddingHorizontal: '5%',
        backgroundColor: '#fff',
        boxShadow: 'rgba(21, 24, 26, 0.1) 0px 1px 5px 0px',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 16,
    },
    textBold: {
        fontWeight: '700',
    }
});