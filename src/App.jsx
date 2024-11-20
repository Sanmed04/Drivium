import "./App.css";
import "./index.css";
import Contacto from "./Pages/Contacto";
import Auto from "./Pages/Auto";
import Index from "./Pages/index";
import Error from "./Pages/error";
import Header from "./layout/header";
import Explorar from "./Pages/Explorar";
import Footer from "./layout/footer";
import Login from "./Pages/Login";
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
                    <Route path="/auto/:id" element={<Auto />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}
