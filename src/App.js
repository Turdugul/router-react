import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import MyOrders from "./pages/MyOrders";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Main page</h1>
            </div>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
