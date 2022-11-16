import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
    

    },
    containerform: {
        flex:1,
        backgroundColor: '#121015',
        marginTop:20,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    containerLogin: {
        flex:1,
        backgroundColor:'#121015',       
        paddingStart:'5%',
        paddingEnd:'5%'

    },
    button: {
        backgroundColor: '#2e2e2e',
        padding: 15,
        borderRadius:15,
        alignItems: 'center',
        marginTop: 8,
        border: 30,

    },

    buttonIcon: {
        backgroundColor: '#2e2e2e',
        padding: 15,
        borderRadius:15,
        marginTop: 8,
        border: 30,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'gray'

    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
        
    },
    image: {
        width: 100,
        height: 45,
        color:'blue',
        alignSelf:'center',
        resizeMode:'contain',

    },
    imageIcon: {
        width: 30,
        height: 25,
        resizeMode:'contain',
        color:'gray',
      

    },
    input: {
        backgroundColor: '#2e2e2e',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        textAlign:'center',
        margin:-10,
        borderWidth:0.5,
        borderColor:'gray'

    },
    buttonCancel: {
        marginTop: 20,
        color: '#00a8ff',
        fontSize: 16,
        

    },
    buttonRegister: {
        marginTop: 10,
        alignSelf: 'center'
    },
    registerText: {
        color: '#00a8ff'
    }

})