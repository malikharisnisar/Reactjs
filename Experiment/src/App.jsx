import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarData from "./component/cardata.jsx";
import BookNow from "./component/booknow";
import YourBooking from "./component/yourbooking";
import "./component/tailwind.css";
import Navbar from "./component/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className = 'pt-16'>
      <Routes>
        <Route path="/" element={<CarData />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/yourbooking" element={<YourBooking />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
