import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home';
import { Favorites } from '../pages/favorites';

const Tab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons'

export function Routes () {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',

                tabBarStyle: {
                    backgroundColor: '#f0f0f0',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={Home}
                    
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) {
                            return <Ionicons name='home' color="#000" size={size} />
                        }

                        return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="FavoritesTab" 
                component={Favorites}

                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) {
                            return <Ionicons name='heart' color="#ff4141" size={size} />
                        }

                        return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

