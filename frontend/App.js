import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen';
import PlanetsScreen from './screens/planetsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>     
      <Stack.Navigator>        
        <Stack.Screen          
          name="Home"          
          component={HomeScreen}          
          options={{ title: 'Home' }}        
        />  
        <Stack.Screen          
          name="Planets"          
          component={PlanetsScreen}          
          options={{ title: 'Planets by climate' }}        
        />  
      </Stack.Navigator>    
    </NavigationContainer>
  );
};

export default App;