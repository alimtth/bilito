import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        fullName: 'شیوا ارغوان',
        gender: 'زن',
        nationalCode: '30892581782',
        phoneNumber: '0918 592 3034',
    })

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext)
};
