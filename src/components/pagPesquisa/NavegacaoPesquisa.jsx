import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';

const Stack = createNativeStackNavigator();

export default function NavegacaoPesquisa() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchPage" component={SearchPage}  />
      <Stack.Screen name="ResultPage" component={ResultPage} />
    </Stack.Navigator>
  );
}