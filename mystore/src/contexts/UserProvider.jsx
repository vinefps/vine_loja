import { useState, createContext,useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export function UserProvider({ children }) {
    const [userLogin, setUserLogin] = useState('');
    return (
        <UserContext.Provider value={{ userLogin, setUserLogin }}>
            {children}
        </UserContext.Provider>
    )
}