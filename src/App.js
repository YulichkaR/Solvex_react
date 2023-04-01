import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { MainPage } from "./components/MainPage/MainPage";
import { Restaurant } from "./components/RestaurantPage/Restaurant";
function App() {
  return (
    <div className="App">
      {/* <MainPage />*/}
      <Restaurant />
      {/*   AboutUs /> */}
    </div>
  );
}

export default App;
