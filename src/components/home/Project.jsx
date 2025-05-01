import { Link } from "react-router-dom";
const Project = (props) => {
  return (
    <Link 
      to={props.url}
      className="project"
      target="_blank"
    >
      <div className="project-main">
        <img src={props.img} alt={props.alt} />
        <h3>{props.h3}</h3>
      </div>
      <div className="project-info">
        <p>{props.p}</p>
        <div className="project-tech">
          {props.tech.map((element, i)=>(
            element
          ))}
      </div>
      </div>
      
    </Link>
  );
};

export default Project;
