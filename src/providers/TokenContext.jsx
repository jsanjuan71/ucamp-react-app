import { useState, createContext, useEffect } from "react";

const TokenContext = createContext(null)

function TokenProvider({children}) {
    const [token, setToken] = useState( localStorage.getItem('token') )

    const logout = () => setToken(null)

    /*
    const login = (newToken) => {
        localStorage.setItem('token', newToken)
        setToken(newToken)
    } */

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])


    return(
        <TokenContext.Provider value={{token, setToken, logout}}>
            {children}
        </TokenContext.Provider>
    )
}

export {TokenContext, TokenProvider}

