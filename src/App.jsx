import "./global.scss";

import { Footer, Home, Nav } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
Footer;
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
