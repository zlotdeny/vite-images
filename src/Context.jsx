import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

    const storedDarkMode = localStorage.getItem("darkTheme");
    if (storedDarkMode === null) {
        return prefersDarkMode;
    }

    return storedDarkMode === "true";
}

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchValue, setSearchValue] = useState("");

    const toggleDarkTheme = () => {
        setIsDarkTheme((prevIsDarkTheme) => {
            localStorage.setItem("darkTheme", !prevIsDarkTheme);

            return !prevIsDarkTheme;
        });
    }

    useEffect(() => {
        document.querySelector("body").classList.toggle("dark-theme", isDarkTheme);
    }, [isDarkTheme])

    return (
        <AppContext.Provider value={{
            isDarkTheme: isDarkTheme,
            toggleDarkTheme: toggleDarkTheme,
            searchValue: searchValue,
            setSearchValue: setSearchValue
        }}>
            {children}
        </AppContext.Provider>
    )
}