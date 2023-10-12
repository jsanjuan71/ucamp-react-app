import { useState, createContext, useEffect } from "react";

const TokenContext = createContext('')

function TokenProvider({children}) {
    const [token, setToken] = useState( localStorage.getItem('token') )

    const logout = () => setToken('')

    /* // esta seria la funcion para hacer login, pero no vale la pena usarla, 
    // porque directo se invoca a setToken y el useEffect se encarga de guardar en localStorage
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

