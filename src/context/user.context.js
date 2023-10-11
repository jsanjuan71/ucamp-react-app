import React, {useRef, useState} from "react"

const UserContext = React.createContext(null)

const {Provider, Consumer} = UserContext

const UserProvider = ({children}) => {
    const token = useRef(null)
    
    const login = (newToken) => {
        console.log("Login", token)
        token.current =  newToken
    }

    const logout = () => {
        token.current = null
    }

    const getToken = () => { return token.current }

    return (
        <Provider value={{getToken, login, logout}}>
            {children}
        </Provider>
    )
}

export {UserProvider, Consumer as UserConsumer, UserContext}