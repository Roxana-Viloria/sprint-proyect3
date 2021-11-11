import React, {useState} from "react";

export const AppContext = React.createContext();

export default function AppProvider ({children}){
    const [search, setSearch]= useState (null);
    const [isDark, setIsDark]= useState (false);
    const [press, setPress]=useState (false)

    return (
        <AppContext.Provider 
            value ={{ search: [search, setSearch], isDark:[isDark, setIsDark], isPress:[press, setPress] }}>
            {children}
        </AppContext.Provider>
    )
}