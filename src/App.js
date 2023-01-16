
import Nav from "./components/Nav";
import PhotoGallery from "./components/PhotoGallery";
import MobilePhotoGallery from "./components/MobilePhotoGallery";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shopping from "./pages/Shopping";
import TestApi from "./components/testingapi";
import SingleItem from "./pages/SingleItem";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import PageNotFound from "./pages/404";
import SignUpForm from "./pages/SignUpForm";



function App() {

  const [cart, setCart] = useState([])

  return (
    <>
    <CartContext.Provider value={{cart, setCart}}>
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="/shop/:category" element={<Shopping/>}/>
          <Route path="/test" element={<TestApi/>}/>
          <Route path="/:id" element={<SingleItem handleAddToCart/>}/>
          <Route path="*" element={<PageNotFound/>}/>

        </Routes>
      </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
