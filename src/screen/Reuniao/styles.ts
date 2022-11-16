import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',


    },
    containerHeader: {
        backgroundColor: '#1c1c1e',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderColor: '#121212'


    },
    containerLogin: {
        backgroundColor: '#1c1c1e',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:15

    },
    containerform: {
        backgroundColor: '#1c1c1e',
        borderWidth: 0.5,
        borderColor: 'gray',
        marginTop:15
    },
    Navigator: {
       
        backgroundColor: '#1c1c1e',
       

    },
    button: {
        alignItems: 'flex-end',
        marginTop: 50,
        marginLeft: 30


    },

    buttonIcon: {
        backgroundColor: '#FF8C00',
        padding: 15,
        borderRadius: 20,
        border: 30,
        width: 60,
        height: 60,
        justifyContent: 'space-around'

    },
    buttonIconT: {
        backgroundColor: '#00a8ff',
        padding: 15,
        borderRadius: 20,
        border: 30,
        width: 60,
        height: 60,
        justifyContent: 'space-around'

    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'

    },
    image: {
        width: 100,
        height: 50,
        color: 'blue',
        alignSelf: 'center',
        resizeMode: 'contain',

    },
    imageIcon: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
        color: 'gray',


    },
    input: {
        marginTop: 50,
        marginLeft: 145,
        height: 50,
        width: 120,
        color: '#fff',
        fontSize: 20


    },
    buttonCancel: {
        marginTop: 20,
        color: '#00a8ff',
        fontSize: 16,


    },
    buttonRegister: {
        margin: 18,
        alignSelf: 'center'
    },
    registerText: {
        color: '#00a8ff'
    },
 
})