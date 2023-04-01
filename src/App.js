import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Middle from "./components/Middle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Write from "./pages/Write";

function App() {
  return (
    <div className="App bg-[#262626]">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
      {/* <Middle/>
      <Footer/> */}
    </div>
  );
}

export default App;
