import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Taichi from "./pages/taichi";
import Plans from "./pages/Plans";
import Teacher from "./pages/Teacher";
import Footer from "./components/footer";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Qigong from "./pages/Qigong";

export default function App() {
  return (
    <>
      <div id="bg-gradient" className="background"></div>
      <div id="everything">
        <div id="bg-image" className="background"></div>
        <Navbar />
        <ScrollToTop />

        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taichi" element={<Taichi />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/qigong" element={<Qigong />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* fallback */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
