import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	container: {
        flex: 1,
        padding: 10
    },
    containerInput: {
        flex: 4,
        justifyContent: "center"
    },
    containerButton: {
        flex: 1
    },
    textInput: {
        fontSize: 20,
        height: 45
    },
    errorSignUp: {
        color: '#ff00000', 
        fontSize: 18
    }
})