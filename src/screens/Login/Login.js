import { useState } from "react";
import { useProfessorContext } from "../../context/ProfessorContext";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useProfessorContext();

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.main}>
                <View style={styles.card}>
                    <Text style={styles.title}>BloggingApp</Text>

                    <View style={[styles.row, { marginTop: 16 }]}>
                        <Text>Email: </Text>
                        <TextInput
                            style={styles.textInput}
                            value={email}
                            onChange={(value) => {
                                setEmail(value.nativeEvent.text);
                            }}
                        />
                    </View>
                    <View style={[styles.row, { marginTop: 8 }]}>
                        <Text>Senha: </Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            value={senha}
                            onChange={(value) => {
                                setSenha(value.nativeEvent.text);
                            }}
                        />
                    </View>
                    {errorMessage !== '' &&
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    }
                    <CustomButton
                        style={styles.button}
                        onPress={async () => {
                            const response = await login(email, senha);

                            if (response?.statusCode === 404) {
                                setErrorMessage('Email ou senha incorretos.');
                                return;
                            }


                            navigation.navigate('/home');
                        }}
                        title={'Login'}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        margin: 0,
        backgroundColor: 'rgb(243, 246, 248)',
        height: '100%',
    },
    main: {
        backgroundColor: '#1f4788',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 4,
        width: '70%',
        padding: 24,
        zIndex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 16,
    },
    textInput: {
        margin: 0,
        fontSize: 16,
        height: 48,
        width: '70%',
        paddingVertical: 0,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        color: "#272b30",
        transition: '180ms linear',
    },
    errorText: {
        color: 'red',
        margin: 0,
        marginTop: 20,
        fontSize: 14,
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#1f4788',
        borderWidth: 1,
        borderColor: '#1f4788',
        color: '#fff',
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});