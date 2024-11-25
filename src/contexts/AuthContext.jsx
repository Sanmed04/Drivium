import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [is_logueado, setIsLogueado] = useState(false);
    const [is_admin, setIsAdmin] = useState(false);
    const [is_user, setIsUser] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('is_logueado') === 'true';
        const admin = localStorage.getItem('is_admin') === 'true';
        const user = localStorage.getItem('is_user') === 'true';
        setIsLogueado(loggedIn);
        setIsAdmin(admin);
        setIsUser(user);
    }, []);

    const login = (email, password) => {
        const adminEmail = "admin@gmail.com";
        const adminPassword = "123";
        const userEmail = "usuario@gmail.com";
        const userPassword = "123";

        if (email === adminEmail && password === adminPassword) {
            setIsLogueado(true);
            setIsAdmin(true);
            localStorage.setItem('is_logueado', 'true');
            localStorage.setItem('is_admin', 'true');
        } else if (email === userEmail && password === userPassword) {
            setIsLogueado(true);
            setIsUser(true);
            localStorage.setItem('is_logueado', 'true');
            localStorage.setItem('is_user', 'true');
        } else {
            alert("Credenciales incorrectas");
        }
    };

    const logout = () => {
        setIsLogueado(false);
        setIsAdmin(false);
        setIsUser(false);
        localStorage.removeItem('is_logueado');
        localStorage.removeItem('is_admin');
        localStorage.removeItem('is_user');
    };

    return (
        <AuthContext.Provider value={{ is_logueado, is_admin, is_user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
