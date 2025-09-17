import { Footer, Header } from "@components";
import Games from "./pages/games";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
