import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, adminOnly }) {
    const { is_logueado, role } = useAuth();

    console.log("ProtectedRoute Role:", role);

    if (!is_logueado) {
        return <Navigate to="/login" />;
    }

    if (adminOnly && role !== 'admin') {
        return <Navigate to="/" />;
    }

    return children;
}
