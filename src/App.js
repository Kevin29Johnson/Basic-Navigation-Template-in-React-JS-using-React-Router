import "./styles.css";
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
    
  );
}
