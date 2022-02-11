import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [togglePopUp, setTogglePopUp] = useState(false);
    const [video, setVideo] = useState('');

    return (
        <DataContext.Provider value={{ togglePopUp, setTogglePopUp, video, setVideo }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataProvider;
