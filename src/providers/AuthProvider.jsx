import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const authContext = createContext();

const useAuthContext = () => {
    return useContext(authContext);
}


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isloding, setIsloding] = useState(false);
    const [baseURL, setBaseURL] = useState("http://demo2578450.mockable.io/")
    const [accessToken, setAccessToken] = useState(() =>
        localStorage.getItem("accessToken")
    );
    const isLoggedIn = !!accessToken;

    const saveAccess = (token) => {
        localStorage.setItem("accessToken", token);
        setAccessToken(token)
    }

    const logout = () => {
        setAccessToken(null);
        localStorage.removeItem("accessToken")
    }

    const currentUsers = async () => {
        if (isloding) return;
        setIsloding(true)
        const result = await axios.get(`${baseURL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        setCurrentUser(result.data);
        setIsloding(false)
    }

    useEffect(() => {
        if (isLoggedIn) {
            currentUsers();
        }
    }, [isLoggedIn]);


    const values = {
        isLoggedIn,
        saveAccess,
        logout,
        currentUser,
        isloding,
        baseURL,

    };

    return <authContext.Provider value={values}>{children}</authContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node,

};



export { AuthProvider, useAuthContext };