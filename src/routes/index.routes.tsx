import * as React from 'react';
import {createStackNavigator}from '@react-navigation/stack';
import Main from '../pages/main';
import AddItem from '../pages/additem';
import SacolaPull from '../pages/sacolapull';
import SacolaPush from '../pages/sacolapush';

export default function Routes (){

    const Stack = createStackNavigator();  

    return(

        <Stack.Navigator 
            initialRouteName="Main"
            screenOptions={{ headerShown:false }}
        >
            <Stack.Screen
                name="Main" 
                component={Main}
            />
            <Stack.Screen   
                name="SacolaPull"
                component={SacolaPull}
            />
            <Stack.Screen   
                name="SacolaPush"
                component={SacolaPush}
            />            
            <Stack.Screen   
                name="AddItem"
                component={AddItem}
            />          

        </Stack.Navigator>

    )
}