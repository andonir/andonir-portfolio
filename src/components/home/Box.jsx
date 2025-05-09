import { useContext } from "react";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


import { Context } from "../../context/context1";
import avatarImg from '../../../public/img/avatar.png'

const Box = () => {
  const { mail } = useContext(Context);
  return (
    <div className="home-box">
      <img src={avatarImg} alt="foto-andoni" />
      <div className="box-info">
        <div className="box-skills">
          <h3>SKILLS</h3>
          <div className="skills-container">
            <DiHtml5 className="icon-html" />
            <FaCss3Alt className="icon-css" />
            <DiJsBadge className="icon-js" />
            <FaReact className="icon-react" />
          </div>
          <div className="skills-container">
            <p>Learning:</p>
          <FaNodeJs className="icon-node" />
            <SiExpress className="icon-express" />
          </div>
        </div>
        <div className="box-contact">
          <h3>CONTACT ME</h3>
          <div className="contact-container">
            <p id="mail">{mail}</p>
            <div className="icon-copy-container">
            <MdContentCopy
              className="icon-copy"
              onClick={() => {
                navigator.clipboard.writeText(mail);
              }}
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
