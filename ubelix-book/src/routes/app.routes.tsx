import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { StackRoutes } from './stack.routes'

import theme from '../global/theme'
import { Feather } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactiveColor,
        tabBarShowLabel: false,
      }}
    >
      <Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <Feather 
              name='home'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}