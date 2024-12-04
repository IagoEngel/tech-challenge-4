import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import { ProfessorProvider } from './src/context/ProfessorContext';
import { PostProvider } from './src/context/PostContext';
import { AppRoutes } from './src/routes/routes';

export default function App() {
  return (
      <ProfessorProvider>
        <PostProvider>
          <AppRoutes />
        </PostProvider>
      </ProfessorProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
