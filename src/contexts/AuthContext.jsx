import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        const loggedIn = localStorage.getItem('is_logueado') === 'true';
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getItem('role');
        setIsLogueado(loggedIn);
        setToken(storedToken);
        setRole(storedRole);
        console.log("Stored Role:", storedRole); // Log the stored role

        if (storedToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }
    }, []);

    const login = (token, role) => {
        setIsLogueado(true);
        setToken(token);
        setRole(role);
        localStorage.setItem('is_logueado', 'true');
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        console.log("Login Role:", role); // Log the role on login

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const logout = () => {
        setIsLogueado(false);
        setToken(null);
        setRole("");
        localStorage.removeItem('is_logueado');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ is_logueado, token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
