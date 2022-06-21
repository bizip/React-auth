import React, { useState } from "react"
const authContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: () => { },
    signup: () => { },
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
        setToken(token);
    }
    const logoutHandler = (token) => {
        setToken(token);
    }
    const contextvalue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <authContext.Provider value={contextvalue}>
        {props.children}
    </authContext.Provider>

}
export default authContext;

