import { StyleSheet, Text, View } from "react-native";
import CriarPostButton from "../../components/CriarPostButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { usePostContext } from "../../context/PostContext";
import { useProfessorContext } from "../../context/ProfessorContext";
import FilterPosts from "../../components/FilterPosts";
import PostsList from "../../components/PostsList";
import Header from "../../components/Header";

export default Home = ({ navigation }) => {
    const { getAllPosts } = usePostContext();
    const { professor } = useProfessorContext();

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <SafeAreaView style={styles.safe}>
            <Header />
            <View style={styles.mainContent}>
                <View style={styles.row}>
                    <Text style={styles.h1Text}>Postagens</Text>
                    {professor &&
                        <CriarPostButton />
                    }
                </View>
                <FilterPosts />
                <PostsList />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        margin: 0,
        backgroundColor:'rgb(243, 246, 248)',
        height: '100%',
    },
    mainContent: {
        marginHorizontal: '5%',
        marginTop: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    h1Text: {
        margin: 0,
        fontSize: 24,
    },
});