
import Nav from "./components/Nav";
import PhotoGallery from "./components/PhotoGallery";
import MobilePhotoGallery from "./components/MobilePhotoGallery";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shopping from "./pages/Shopping";



function App() {
  return (
    <>
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/shop" element={<Shopping/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
