import { Routes, Route } from "react-router-dom";
import Header from "././components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lineas from "./pages/Lineas";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineas" element={<Lineas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
