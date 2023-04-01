import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { MainPage } from "./components/MainPage/MainPage";
import { Restaurant } from "./components/RestaurantPage/Restaurant";
import { Hookahs } from "./components/HookahsPage/Hookahs";
import { Pubs } from "./components/PubsPage/Pubs";
function App() {
  return (
    <div className="App">
      {/* <MainPage />*/}
      {/* <Restaurant /> */}
      {/* <Hookahs /> */}
      <Pubs />
      {/*   AboutUs /> */}
    </div>
  );
}

export default App;
