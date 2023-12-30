import { createContext, useContext } from "react";


export const TheameContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const TheamProvider = TheameContext.Provider

export default function useTheme(){
    return useContext(TheameContext)
}