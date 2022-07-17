import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NewArrival from "./pages/NewArrival";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Login from "./pages/Login";
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main className='app_main_div'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/newarrival' element={<NewArrival />} />
            <Route exact path='/product/:id' element={<Product />} />

            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />

            <Route exact path='/login' element={<Login />} />
          </Routes>
        </main>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
