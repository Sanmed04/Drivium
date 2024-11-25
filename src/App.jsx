import "./App.css";
import "./index.css";
import Contacto from "./Pages/Contacto";
import Index from "./Pages/index";
import Error from "./Pages/error";
import Header from "./layout/header";
import Explorar from "./Pages/Explorar";
import Footer from "./layout/footer";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminAutos from "./Pages/Admin/Autos";
import AdminReservas from "./Pages/Admin/Reservas";
import AdminUsuarios from "./Pages/Admin/Usuarios";
import ProtectedRoute from "./contexts/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/autos" element={<Explorar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin/dashboard" element={<ProtectedRoute adminOnly={true}><Dashboard /></ProtectedRoute>} />
                    <Route path="/admin/autos" element={<ProtectedRoute adminOnly={true}><AdminAutos /></ProtectedRoute>} />
                    <Route path="/admin/reservas" element={<ProtectedRoute adminOnly={true}><AdminReservas /></ProtectedRoute>} />
                    <Route path="/admin/usuarios" element={<ProtectedRoute adminOnly={true}><AdminUsuarios /></ProtectedRoute>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}
