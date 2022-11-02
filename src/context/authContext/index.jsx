import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [token, setToken] = useState('')

    return (<AuthContext.Provider value={{ logged, setLogged, token, setToken }}>{children}</AuthContext.Provider>)
}

export { AuthProvider }
export default AuthContext
export function useAuth() {
    return useContext(AuthContext)
}