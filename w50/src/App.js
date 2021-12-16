import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


import "./index.css";



function App() {
  return (
  <BrowserRouter>
    <div className="container">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;


