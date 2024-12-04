import { StyleSheet, Text, TextInput, View } from "react-native";

export default LabeledMultilineTextField = ({ value, onChange }) => {
    return (
        <View>
            <Text style={{ marginBottom: 8 }}>Conteúdo</Text>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={3}
                maxLength={100}
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
        padding: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        color: '#272b30',
        fontSize: 14,
        transition: 'all 180ms linear',
        height: 'auto',
    },
});