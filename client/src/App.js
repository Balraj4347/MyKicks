import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NewArrival from "./pages/NewArrival";
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/newarrival' element={<NewArrival />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
