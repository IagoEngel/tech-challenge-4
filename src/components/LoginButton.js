import { Alert, StyleSheet } from "react-native";
import { useProfessorContext } from "../context/ProfessorContext";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

export default LoginButton = () => {
    const navigate = useNavigation();

    const { professor } = useProfessorContext();

    return (
        <>
            {!professor
                ? <CustomButton
                    onPress={() => {
                        navigate.navigate('/login');
                    }}
                    style={styles.loginButton}
                    textStyle={styles.textStyle}
                    title={'Login'}
                />
                : <CustomButton
                    onPress={() => {
                        navigate.navigate('/login');
                    }}
                    style={styles.loginButton}
                    textStyle={styles.textStyle}
                    title={professor.Nome}
                />

            }
        </>
    );
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: 'transparent',
        padding: 0,
        alignItems: 'center',
    },
    textStyle: {
        color: '#1f4788',
    },
});