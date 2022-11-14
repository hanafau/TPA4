// import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Blog from "./components/Home/Blog";
import Porto1 from "./components/Home/Porto1";
import Porto2 from "./components/Home/Porto2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Porto1" element={<Porto1 />} />
            <Route path="/Porto2" element={<Porto2 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
