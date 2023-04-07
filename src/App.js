import "./App.css";
import { Routes, Route } from "react-router-dom";

import { AboutUs } from "./components/AboutUs/AboutUs";
import { MainPage } from "./components/MainPage/MainPage";
import { Restaurant } from "./components/RestaurantPage/Restaurant";
import { Pubs } from "./components/PubsPage/Pubs";
import { Hookahs } from "./components/HookahsPage/Hookahs";

import { Renthen } from "./components/ThirtyPages/100Renthen";
import { Night } from "./components/ThirtyPages/1001Night";
import { Amsterdam } from "./components/ThirtyPages/Amsterdam";
import { Bachevsky } from "./components/ThirtyPages/Bachevsky";
import { Boat } from "./components/ThirtyPages/Boat";

import { Chilling } from "./components/ThirtyPages/Chilling";
import { Cloud } from "./components/ThirtyPages/CloudPanorama";
import { Depo } from "./components/ThirtyPages/Depo";
import { Cherry } from "./components/ThirtyPages/DrunkCherry";
import { Filin } from "./components/ThirtyPages/FILIN";

import { Lampa } from "./components/ThirtyPages/GasovaLampa";
import { Friend } from "./components/ThirtyPages/GoodFriend";
import { Leopolis } from "./components/ThirtyPages/GrandLeopolis";
import { Hashtag } from "./components/ThirtyPages/Hashtag";
import { Hotbowl } from "./components/ThirtyPages/HotBowl";

import { Kantona } from "./components/ThirtyPages/Kantona";
import { Kumpel } from "./components/ThirtyPages/Kumpel";
import { Metro } from "./components/ThirtyPages/Metro";
import { Panorama } from "./components/ThirtyPages/Panorama";
import { Purple } from "./components/ThirtyPages/PurpleLoungeBar";

import { Secret } from "./components/ThirtyPages/Secret";
import { Strumari } from "./components/ThirtyPages/Stumari";
import { Sunset } from "./components/ThirtyPages/Sunset";
import { Truth } from "./components/ThirtyPages/Truth";
import { Arsenal } from "./components/ThirtyPages/UnderArsenal";

import { Goldenstar } from "./components/ThirtyPages/UnderTheGoldenStar";
import { Valentino } from "./components/ThirtyPages/Valentino";
import { Warshava } from "./components/ThirtyPages/Warshava";
import { Lion } from "./components/ThirtyPages/WhiteLion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/pubs" element={<Pubs />}></Route>
        <Route path="/hookahs" element={<Hookahs />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>

        <Route path="/renthen" element={<Renthen />}></Route>
        <Route path="/night" element={<Night />}></Route>
        <Route path="/amsterdam" element={<Amsterdam />}></Route>
        <Route path="/bachevsky" element={<Bachevsky />}></Route>
        <Route path="/boat" element={<Boat />}></Route>

        <Route path="/chilling" element={<Chilling />}></Route>
        <Route path="/cloud" element={<Cloud />}></Route>
        <Route path="/depo" element={<Depo />}></Route>
        <Route path="/cherry" element={<Cherry />}></Route>
        <Route path="/filin" element={<Filin />}></Route>

        <Route path="/lampa" element={<Lampa />}></Route>
        <Route path="/friend" element={<Friend />}></Route>
        <Route path="/leopolis" element={<Leopolis />}></Route>
        <Route path="/hashtag" element={<Hashtag />}></Route>
        <Route path="/hotbowl" element={<Hotbowl />}></Route>

        <Route path="/kantona" element={<Kantona />}></Route>
        <Route path="/kumpel" element={<Kumpel />}></Route>
        <Route path="/metro" element={<Metro />}></Route>
        <Route path="/panorama" element={<Panorama />}></Route>
        <Route path="/purple" element={<Purple />}></Route>

        <Route path="/secret" element={<Secret />}></Route>
        <Route path="/stumari" element={<Strumari />}></Route>
        <Route path="/sunset" element={<Sunset />}></Route>
        <Route path="/truth" element={<Truth />}></Route>
        <Route path="/arsenal" element={<Arsenal />}></Route>

        <Route path="/goldenstar" element={<Goldenstar />}></Route>
        <Route path="/valentino" element={<Valentino />}></Route>
        <Route path="/warsava" element={<Warshava />}></Route>
        <Route path="/lion" element={<Lion />}></Route>
        <Route path="/churchill" element={<Сhurchill />}></Route>
      </Routes>
    </div>
  );
}

export default App;
