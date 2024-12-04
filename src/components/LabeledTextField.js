import { StyleSheet, Text, TextInput, View } from "react-native";

export default LabeledTextField = ({ value, onChange }) => {
    return (
        <View>
            <Text style={{ marginBottom: 8 }}>Titulo</Text>
            <TextInput 
                style={styles.input}
                value={value} 
                onChange={(e) => onChange(e)} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        userSelect: 'auto',
        marginBottom: 24,
        height: 40,
        paddingVertical: 0,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        color: '#272b30',
        fontSize: 14,
        transition: 'all 180ms linear',
    },
});