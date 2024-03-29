import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux-actions/userActions";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NewArrival from "./pages/NewArrival";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Account from "./pages/Account";
import MyOrders from "./pages/MyOrders";
import Payment from "./pages/Payment";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // disable right click
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <div className='App'>
      <NavBar />
      <main className='app_main_div'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/newarrival' element={<NewArrival />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/products/:keyword' element={<NewArrival />} />

          <Route exact path='/cart' element={<Cart />} />

          <Route
            exact
            path='/checkout'
            element={
              <ProtectedRoute>
                <Checkout />{" "}
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path='/payment'
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          ></Route>

          <Route exact path='/login' element={<Login />} />

          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path='/orders'
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
