import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import OutlineTextButton from './OutlineTextButton';
import { usePostContext } from "../context/PostContext";

export default FilterPosts = () => {
    const { searchPost } = usePostContext();
    const [textValue, setTextValue] = useState('');

    return (
        <View style={styles.row}>
            <TextInput
                style={styles.textInput}
                value={textValue}
                onChange={(text) => {
                    setTextValue(text.nativeEvent.text);
                }}
            />
            <OutlineTextButton
                onPress={async () => {
                    searchPost(textValue);
                }}
                title={'Filtrar'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 8,
    },
    textInput: {
        margin: 0,
        fontSize: 16,
        height: 48,
        width: 120,
        paddingVertical: 0,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        color: "#272b30",
        transition: '180ms linear',
    }
});