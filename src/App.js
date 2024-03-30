import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./containers/Navbar/Navbar";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Experience from "./pages/Experience";
import Destination from "./pages/Destination";
import { CheckOut, HotelDetails, HotelList, Login } from "./pages";
import ImageCarousel from "./utils/ImageCarousel ";

function App() {
  return (
    <Routes>
      {/* <Route> */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="hotelList" element={<HotelList />} />
        <Route path="hotelList/:id" element={<HotelDetails />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="experience" element={<Experience />} />
        <Route path="destination" element={<Destination />} />
      </Route>
    </Routes>
    //  <ImageCarousel />
  );
}
export default App;
