import Proyect from "./Proyect";
import { useContext } from "react";
import { FaFolder } from "react-icons/fa";


import { Context } from "../../context/context1";
const Proyects = () => {
  const { proyectsData } = useContext(Context);
  return (
    <div className="proyects">
      <div className="proyects-top">
      <h2>Proyects</h2>
      <FaFolder className="icon-proyect"></FaFolder>
      </div>
      <div className="proyects-container">
        <Proyect
          img={proyectsData[0].img}
          imgAlt={proyectsData[0].alt}
          h3={proyectsData[0].h3}
          p={proyectsData[0].p}
          url={proyectsData[0].url}
        ></Proyect>
        <Proyect
          img={proyectsData[1].img}
          imgAlt={proyectsData[1].alt}
          h3={proyectsData[1].h3}
          p={proyectsData[1].p}
          url={proyectsData[1].url}
        ></Proyect>
        <Proyect
          img={proyectsData[2].img}
          imgAlt={proyectsData[2].alt}
          h3={proyectsData[2].h3}
          p={proyectsData[2].p}
          url={proyectsData[2].url}
        ></Proyect>
        <Proyect
          img={proyectsData[3].img}
          imgAlt={proyectsData[3].alt}
          h3={proyectsData[3].h3}
          p={proyectsData[3].p}
          url={proyectsData[3].url}

        ></Proyect>
      </div>
    </div>
  );
};

export default Proyects;
