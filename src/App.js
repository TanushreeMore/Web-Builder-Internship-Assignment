import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
// import Navbar from "./components/common/Navbar";
import Nav from "./components/common/Nav";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Nav /> 
      <Routes> 
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
