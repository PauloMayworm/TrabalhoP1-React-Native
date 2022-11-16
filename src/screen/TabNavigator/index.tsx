import React from "react";
import { FontAwesome, FontAwesome5, AntDesign,Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Reuniao } from "../Reuniao/Index";
import { Batepapo } from "../Batepapo/Index";
import { Contatos } from "../Contatos/Index";
import { Mais } from "../Mais/Index";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (        
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Reuniões' 
                component={Reuniao} 
                options={{
                    tabBarIcon:()=>(
                    <FontAwesome name="video-camera" size={30} color="black" />
                    )
                }}
                />
                <Tab.Screen name='Bate-papo' component={Batepapo}
                options={{
                    tabBarIcon:()=>(
                        <Entypo name="message" size={30} color="black" />
                    )
                }}/>              
                <Tab.Screen name='Contatos' 
                component={Contatos}
                options={{
                    tabBarIcon:()=>(
                        <FontAwesome5 name="user" size={30} color="black" />
                    )
                }}/>                
                <Tab.Screen name='Mais'
                component={Mais}
                options={{
                    tabBarIcon:()=>(
                        <AntDesign name="ellipsis1" size={30} color="black" />
                    )
                }}/>
                
            </Tab.Navigator> 
            </NavigationContainer>
            
            
    )
}