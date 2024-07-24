import About from "./component/About";
import Academics from "./component/Academics";
import Admission from "./component/Admission";
import Contact from "./component/Contact";
import Faculty from "./component/Faculty";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Students from "./component/Students";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import QuickLinks from "./pages/QuickLinks";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* <QuickLinks /> */}


    </div>
  );
}

export default App;
