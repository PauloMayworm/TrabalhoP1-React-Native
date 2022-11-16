import React from 'react-native'
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { styles } from "./styles";
import Logo from '../../assets/zoom-logo.png';
import Apple from '../../assets/apple-icon.png';
import Google from '../../assets/google-icon.png';
import Facebook from '../../assets/facebook-icon.png';
import Sso from '../../assets/sso-icon.png';

export function Login() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonCancel}>
                <Text style={styles.buttonCancel}>Cancelar</Text>

            </TouchableOpacity>
            <Image
                source={Logo}
                style={styles.image}
            />
            <Text></Text>
            <TextInput
                placeholder="Endereço de E-mail"
                style={styles.input}
                placeholderTextColor="gray"
            />
            <Text></Text>
            <TextInput
                secureTextEntry={true}
                placeholder="Senha"
                style={styles.input}
                placeholderTextColor="gray"
            />
            <View style={styles.containerform}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLogin}>
                <TouchableOpacity style={styles.buttonIcon}>
                    <Image
                        style={styles.imageIcon}
                        source={Sso}
                    />
                    <Text style={styles.buttonText}>Fazer login com SSO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonIcon}>
                    <Image
                        style={styles.imageIcon}
                        source={Apple}
                    />
                    <Text style={styles.buttonText}>Fazer login com Apple</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonIcon}>
                    <Image
                        style={styles.imageIcon}
                        source={Google}
                    />
                    <Text style={styles.buttonText}>Fazer login com Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonIcon}>
                    <Image
                        style={styles.imageIcon}
                        source={Facebook}
                    />
                    <Text style={styles.buttonText}>Fazer login com Facebook</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}