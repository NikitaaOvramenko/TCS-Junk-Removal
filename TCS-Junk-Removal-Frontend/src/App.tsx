import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import RequestPage from "./pages/RequestPage";
import LocationContextProvider from "./context/LocationProvider";
import MetaTags from "./components/MetaTags";

function App() {
  return (
    <Router>
      <LocationContextProvider>
        <MetaTags />
        <NavBar />
        <Routes>
          <Route path="/:slug" element={<HomePage />} />
          <Route path="/book" element={<RequestPage />} />
        </Routes>
        <Footer />
      </LocationContextProvider>
    </Router>
  );
}

export default App;
