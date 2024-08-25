import './App.css'
import {HomePage} from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {ManagePage} from "./pages/ManagePage/ManagePage.jsx";

function App() {
    return (
        <>
            <div className="container">
                <div className="d-flex flex-column min-vh-100">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/manage" element={<ManagePage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
