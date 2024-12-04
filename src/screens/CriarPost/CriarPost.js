import { StyleSheet, Text, View } from "react-native";
import LabeledTextField from '../../components/LabeledTextField';
import LabeledMultilineTextField from '../../components/LabeledMultilineTextField';
import { useNavigation } from "@react-navigation/native";
import { usePostContext } from "../../context/PostContext";
import { useProfessorContext } from "../../context/ProfessorContext";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

export default CriarPost = () => {
    const navigation = useNavigation();
    const { createPost } = usePostContext();
    const { token, professor } = useProfessorContext();

    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');

    return (
        <View style={styles.main}>
            <Text style={styles.h1}>Nova Postagem</Text>

            <View style={styles.row}>
                <View style={styles.card}>
                    <LabeledTextField value={titulo} onChange={(e) => setTitulo(e.nativeEvent.text)} />
                    <LabeledMultilineTextField value={conteudo} onChange={(e) => setConteudo(e.nativeEvent.text)} />

                    <View style={[styles.row, { gap: 24 }]}>
                        <CustomButton
                            onPress={() => {
                                navigation.navigate('/home');
                            }}
                            style={styles.button}
                            textStyle={styles.textButton}
                            title={'Voltar'}
                        />
                        <CustomButton
                            onPress={async () => {
                                const post = {
                                    'Titulo': titulo,
                                    'Conteudo': conteudo,
                                    'ProfessorId': professor['_id']
                                };

                                await createPost(token, post);

                                navigation.navigate('/home');
                            }}
                            style={[styles.button, { backgroundColor: '#1f4788'}]}
                            textStyle={[styles.textButton, { color: '#fff'}]}
                            title={'Salvar'}
                        />
                    </View>
                </View>
                <View style={styles.spacer} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(243, 246, 248)',
        height: '100%',
        padding: 20,
    },
    h1: {
        margin: 0,
        marginVertical: 16,
        fontSize: 24,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderRadius: 4,
        padding: 24,
    },
    spacer: {
        width: '100%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#1f4788',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        margin: 0,
        paddingVertical: 0,
        paddingHorizontal: 16,
    },
    textButton: {
        color: '#1f4788',
        fontWeight: '600',
    },
});