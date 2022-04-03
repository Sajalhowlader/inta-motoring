import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Header from "./components/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/Home" element={<Home />} > </Route>
        <Route path="/Review" element={<Review />} > </Route>
        <Route path="/Dashboard" element={<Dashboard />} > </Route>
        <Route path="/Blogs" element={<Blogs />} > </Route>
        <Route path="/About" element={<About />} > </Route>
      </Routes>
    </div>
  );
}

export default App;
