import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

export const setEmail = (text) => {
    return {
        type: "set_email",
        payload: text
    }
}

export const setPassword = (password) => {
    return {
        type: "set_password",
        payload: password
    }
}

export const setName = (name) => {
    return {
        type: "set_name",
        payload: name
    }
}

export const createUser = ({ name, email, password }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( user => _successAddUser(dispatch) )
            .catch( (error) => _errorAddUser(error, dispatch) )
    }
}

const _successAddUser = (dispatch) => {
    dispatch ( { type: "create_user_success" } );
}

const _errorAddUser = (error, dispatch) => {
    alert(error.message);
    dispatch ( { type: "create_user_error" } );
}


