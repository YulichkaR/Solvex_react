import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { MainPage } from "./components/MainPage/MainPage";
import { Restaurant } from "./components/RestaurantPage/Restaurant";
import { Panorama } from "./components/ThirtyPages/Panorama";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        {/*   <AboutUs /> </Routes>*/}
      <Panorama />
    </div>
  );
}

export default App;
