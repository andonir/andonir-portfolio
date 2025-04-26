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
         {proyectsData.map((element,i)=>(
          <Proyect key={i}
          img={proyectsData[i].img}
          imgAlt={proyectsData[i].alt}
          h3={proyectsData[i].h3}
          p={proyectsData[i].p}
          url={proyectsData[i].url}
          tech ={proyectsData[i].tech}
          >  
          </Proyect>
         ))}
        
      </div>
    </div>
  );
};

export default Proyects;
