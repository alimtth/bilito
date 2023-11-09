import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserDataProvider = ({ children }) => {

    const storedUserData = localStorage.getItem("userData")
    const initialUserData = storedUserData && storedUserData !== "undefined" ? JSON.parse(storedUserData) : {
        fullName: 'شیوا ارغوان',
        gender: 'زن',
        nationalCode: '30892581782',
        phoneNumber: '0918 592 3034',
      };    
    const [userData, setUserData] = useState(initialUserData);

    const savaUserData = (newData) => {
        setUserData(newData);
    }

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData])

    return (
        <UserContext.Provider value={{userData, setUserData, savaUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext)
};
