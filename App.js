import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home/HomeScreen'
import CronometroScreen from './screens/cronometro/CronometroScreen'
import ListarScreen from './screens/tarefas/listar/ListarScreen'
import TarefaScreen from './screens/tarefas/TarefaScreen'


const Tab = createBottomTabNavigator();export default function App() {
return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Tarefas" component={TarefaScreen} />
<Tab.Screen name="Cronômetro" component={CronometroScreen} />

</Tab.Navigator>
</NavigationContainer>
);
}