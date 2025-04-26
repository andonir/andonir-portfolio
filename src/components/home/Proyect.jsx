import { Link } from "react-router-dom";
const Proyect = (props) => {
  return (
    <Link 
      to={props.url}
      className="proyect"
      target="_blank"
    >
      <div className="proyect-main">
        <img src={props.img} alt={props.alt} />
        <h3>{props.h3}</h3>
      </div>
      <div className="proyect-info">
        <p>{props.p}</p>
        <div className="proyect-tech">
          {props.tech.map((element, i)=>(
            element
          ))}
      </div>
      </div>
      
    </Link>
  );
};

export default Proyect;
