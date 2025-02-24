import React,{ createContext } from "react";

export const PowerHouse = createContext();

export const ContextFunc = ({ children }) => {
    const name = 'Pradum'
    return (
        <PowerHouse.Provider value={name}>
            {children}
        </PowerHouse.Provider>
    );
};