import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
    const { is_logueado, is_admin } = useAuth();

    if (!is_logueado) {
        return <Navigate to="/login" />;
    }

    if (adminOnly && !is_admin) {
        return <Navigate to="/" />;
    }

    return children;
}
