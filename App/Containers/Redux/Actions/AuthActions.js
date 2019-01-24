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