import React, {useState} from "react"

const UserContext = React.createContext()

const {Provider, Consumer} = UserContext

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        token: null
    })
    
    const login = (email, token) => {
        console.log("Login", email, token)
        setUser({
            email,
            token
        })
    }

    const logout = () => {
        setUser({
            email: null,
            token: null
        })
    } 

    return (
        <Provider value={{user, login, logout}}>
            {children}
        </Provider>
    )
}

export {UserProvider, Consumer as UserConsumer, UserContext}