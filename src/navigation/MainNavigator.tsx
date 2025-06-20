import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { SETTINGS } from '../settings';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: SETTINGS.COLORS.PRIMARY,
          },
          headerTintColor: SETTINGS.COLORS.TEXT.LIGHT,
          headerTitleStyle: {
            fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.SEMIBOLD,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
