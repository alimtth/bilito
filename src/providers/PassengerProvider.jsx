import React, {createContext, useContext, useState} from 'react';
import PropTypes from "prop-types";
import {AuthProvider} from "@/providers/AuthProvider.jsx";

const passengerContext = createContext()

const usePassengerContext = () => {
    return useContext(passengerContext)
}

function PassengerProvider({children}) {
    const [passengerDetail,setPassengerDetail] = useState()

    const saveDetail = (detail)=>{
        setPassengerDetail(detail)
    }


    const values = {
        passengerDetail,
        saveDetail,
    }

    return <passengerContext.Provider value={values}>
        {children}
    </passengerContext.Provider>
}

PassengerProvider.propTypes = {
    children: PropTypes.node,
}

export {PassengerProvider, usePassengerContext}