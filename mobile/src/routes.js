import React from 'react';
import Detail from './pages/Detail'
import Incidents from './pages/Incidents';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents}/>       
                <AppStack.Screen name="Detail" component={Detail}/>                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}