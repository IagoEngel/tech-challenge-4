import { StyleSheet, Text, View } from "react-native";
import { usePostContext } from "../context/PostContext";
import { useProfessorContext } from "../context/ProfessorContext";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

export default PostsList = () => {
    const navigation = useNavigation();

    const { posts, deletePost } = usePostContext();
    const { professor, token } = useProfessorContext();

    const formatDate = (date) => {
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        let time = date.substring(11, 16);


        return `${day}/${month}/${year} ${time}`;
    }

    return (
        <>
            {posts?.length > 0 && posts.map((p) => {
                return (
                    <View
                        key={p['_id']}
                        style={styles.postItem}
                    >
                        <Text style={styles.postTitle}>{p.Titulo}</Text>
                        <Text style={styles.postContent}>{p.Conteudo}</Text>

                        <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                            <Text style={styles.nomeProfessor}>{p.ProfessorId?.Nome}</Text>
                            <Text style={styles.postDate}>{formatDate(p?.UpdatedAt)}</Text>
                        </View>
                        {professor &&
                            <View style={[styles.row, { justifyContent: 'start', marginTop: 16 }]}>
                                <CustomButton
                                    onPress={() => {
                                        navigation.navigate('/editar-post', { state: { post: p } })
                                    }}
                                    title={'Editar'}
                                />
                                <CustomButton
                                    onPress={async () => {
                                        await deletePost(p['_id'], token);
                                    }}
                                    style={{ backgroundColor: '#c92a2a' }}
                                    title={'Excluir'}
                                />
                            </View>
                        }
                    </View>
                );
            })}
        </>
    );
}

const styles = StyleSheet.create({
    postItem: {
        flexDirection: 'column',
        borderRadius: 5,
        marginBottom: 6,
        backgroundColor: 'white',
        padding: 12,
    },
    postTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    postContent: {
        margin: 0,
        marginBottom: 8,
        height: 40,
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
    },
    nomeProfessor: {
        fontSize: 14,
        fontWeight: '700',
    },
    postDate: {
        fontSize: 14,
    },
});