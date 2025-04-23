import "../styles/Home.css";
import Box from "../components/home/Box";
import Proyects from "../components/home/Proyects";
import { FaLanguage } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <Box></Box>
      <div className="languages">
        <div className="languages-top">
          <h2>Languages</h2>
          <FaLanguage className="icon-language"></FaLanguage>
        </div>

        <p>I speak English, Basque and Spanish.</p>
      </div>
      <Proyects></Proyects>
    </div>
  );
};
export default Home;
