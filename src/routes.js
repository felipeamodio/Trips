import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Destinations from '../src/components/Destinations/index';
import London from '../src/components/London/index';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Destinations"
                              component={Destinations}
                />

                <Stack.Screen name="London"
                              component={London}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;