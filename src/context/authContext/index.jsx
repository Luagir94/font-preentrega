import { createContext, useState, useEffect, useContext } from "react";
import { Notification } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState({})
    return (<AuthContext.Provider value={{logged, setLogged,token, setToken,user, setUser}}>{children}</AuthContext.Provider>)
}

export { AuthProvider }
export default AuthContext
export function useAuth() {
    return useContext(AuthContext)
}