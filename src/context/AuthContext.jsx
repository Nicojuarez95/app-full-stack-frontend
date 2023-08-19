import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth.js'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticate] = useState(false)

    const signup = async (user) => { 
        try{
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticate(true)
            console.log(res.data.message)
        }catch(error){
            console.log(error.response)
        }
            
    }

    return <AuthContext.Provider 
    value={{
        signup, 
        user, 
        isAuthenticated
    }}>
        {children}
    </AuthContext.Provider>
}