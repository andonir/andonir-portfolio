import "../styles/Home.css";
import Box from "../components/home/Box";
import Projects from "../components/home/Projects";
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

        <ul>
          <li>
            <p>Spanish (native)</p>
          </li>
          <li>
            <p>Basque (road to C1)</p>
          </li>
          <li>
            <p>English (road to C1)</p>
          </li>
          <li>
            <p>French (near B1)</p>
          </li>
        </ul>
      </div>
      <Projects></Projects>
    </div>
  );
};
export default Home;
