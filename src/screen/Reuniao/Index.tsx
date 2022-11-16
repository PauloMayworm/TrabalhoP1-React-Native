import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Reuniao = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerLogin}>
                    <TouchableOpacity style={styles.buttonIcon}>
                        <FontAwesome name="video-camera" size={30} color="white" />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonIconT}>
                        <MaterialIcons name="add-box" size={30} color="white" />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIconT}>
                        <FontAwesome name="calendar-plus-o" size={30} color="white" />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIconT}>
                        <Ionicons name="ios-share" size={30} color="white" />
                    </TouchableOpacity>

                </View>
                <View style={styles.containerform}>
                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={styles.registerText}>Adicionar um calendário</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>
    )
}