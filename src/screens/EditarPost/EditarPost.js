import { useState } from "react";
import { usePostContext } from "../../context/PostContext";
import { useProfessorContext } from "../../context/ProfessorContext";
import { StyleSheet, Text, View } from "react-native";
import LabeledTextField from "../../components/LabeledTextField";
import LabeledMultilineTextField from "../../components/LabeledMultilineTextField";
import CustomButton from "../../components/CustomButton";

export default EditarPost = ({ navigation, route }) => {
    const { putPost } = usePostContext();
    const { token } = useProfessorContext();

    const [titulo, setTitulo] = useState(route.params.state.post.Titulo);
    const [conteudo, setConteudo] = useState(route.params.state.post.Conteudo);

    return (
        <View style={styles.main}>
            <Text style={styles.h1}>Modificar Postagem</Text>

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
                                    'ProfessorId': route.params.state.post.ProfessorId._id
                                };

                                await putPost(route.params.state.post._id, token, post);

                                navigation.navigate('/home');
                            }}
                            style={[styles.button, { backgroundColor: '#1f4788' }]}
                            textStyle={[styles.textButton, { color: '#fff' }]}
                            title={'Salvar'}
                        />
                    </View>
                    <View style={styles.spacer} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(243, 246, 248)',
        height: '100%',
        padding: 40,
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