import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
// import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="*" element={<><div><h1>404! Page not Found.</h1></div><div><Link to="/">Back Home</Link></div></>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
