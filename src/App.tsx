import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Note: imports have no ".tsx" extension — the bundler resolves it.
// App is the root component; it owns the page layout.
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />   {/* fallback for unknown URLs */}
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}
