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

    const signup = async (user) => { 
        try{
            const res = await registerRequest(user)
            setUser(res.data)
            alert(res.data.message)
        }catch(error){
            alert(error.response.data.error)
        }
    }

    return <AuthContext.Provider value={{
        signup, user,
    }}>{children}</AuthContext.Provider>
}