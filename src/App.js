
import Nav from "./components/Nav";
import PhotoGallery from "./components/PhotoGallery";
import MobilePhotoGallery from "./components/MobilePhotoGallery";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shopping from "./pages/Shopping";
import TestApi from "./components/testingapi";
import SingleItem from "./pages/SingleItem";



function App() {
  return (
    <>
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/shop/:category" element={<Shopping/>}/>
          <Route path="/test" element={<TestApi/>}/>
          <Route path="/:id" element={<SingleItem/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
