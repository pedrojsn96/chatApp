const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == "set_email"){
        return { ...state, email: action.payload }
    }
    if(action.type == "set_password"){
        return { ...state, password: action.payload }
    }
    if(action.type == "set_name"){
        return { ...state, name: action.payload }
    }

    return state;
}