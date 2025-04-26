import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WeatherSearcher from "./pages/proyects/weather-searcher/WeatherSearcher";
import PaintIt from "./pages/proyects/paint-it/PaintIt.jsx";
import Calculator from "./pages/proyects/calculator/Calculator.jsx";
import "./styles/App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
