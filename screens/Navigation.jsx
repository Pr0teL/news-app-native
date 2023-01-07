import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import FullPost from './FullPost';
import Home from './Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false }}/>
                <Stack.Screen name='Post' component={FullPost} options={{headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}