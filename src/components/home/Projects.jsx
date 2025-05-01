import Project from "./Project";
import { useContext } from "react";
import { FaFolder } from "react-icons/fa";


import { Context } from "../../context/context1";
const Projects = () => {
  const { projectsData } = useContext(Context);
  return (
    <div className="projects">
      <div className="projects-top">
      <h2>Projects</h2>
      <FaFolder className="icon-project"></FaFolder>
      </div>
      <div className="projects-container">
         {projectsData.map((element,i)=>(
          <Project key={i}
          img={projectsData[i].img}
          imgAlt={projectsData[i].alt}
          h3={projectsData[i].h3}
          p={projectsData[i].p}
          url={projectsData[i].url}
          tech ={projectsData[i].tech}
          >  
          </Project>
         ))}
        
      </div>
    </div>
  );
};

export default Projects;
