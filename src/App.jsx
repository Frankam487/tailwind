import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <>
      
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/projects" element={<Projects/> } />
      </Routes>
    </BrowserRouter> 
      
    </>
  );
};

export default App;