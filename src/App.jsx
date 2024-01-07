import "./global.scss";

import { Footer, Home, Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
Footer;
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
