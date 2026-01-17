import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import OnlineDelivery from "./components/OnlineDelivery";
import BestPlaces from "./components/BestPlaces";
import BestCuisines from "./components/BestCuisines";
import ExploreEveryRestaurant from "./components/ExploreEveryRestaurant";
import Footer from "./components/Footer";
import RestaurantDetails from "./components/RestaurantDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Category />
              <TopRest />
              <OnlineDelivery />
              <BestPlaces />
              <BestCuisines />
              <ExploreEveryRestaurant />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/restaurant/:id" element={<RestaurantDetails />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
