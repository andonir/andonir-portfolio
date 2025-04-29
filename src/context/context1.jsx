import { createContext, useState} from "react";
import calculatorImg from '../../public/img/calculator.png'
 import GlowingYouUpImg from '../../public/img/GlowingYouUp.png'
 import paintingImg from '../../public/img/painting.png'
 import weatherImg from '../../public/img/weather.png'


import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

 const mail = 'andoniroura@outlook.es';
 const realKey = '5LKfhLU62';


const proyectsData = [
    {
         img: GlowingYouUpImg,
        alt: 'GlowingYouUpImg',
        h3: 'GlowingYouUp',
        p: 'Blog about personal development',
        url: 'https://glowingyouup.github.io/',
        tech: [<DiHtml5 key={0} className="icon-html"/>, <DiJsBadge key={1} className="icon-js"/>, <FaCss3Alt key={2} className="icon-css"/>]
        
    },
    {
         img: weatherImg,
        alt: 'WheaterImg',
        h3: 'Wheather Searcher',
        p: 'Weather Searcher using API',
        url: 'https://andonir.github.io/weathersearcher/',
        tech: [<DiHtml5 key={0} className="icon-html"/>, <DiJsBadge key={1} className="icon-js"/>, <FaCss3Alt key={2} className="icon-css"/>]

    },
    {
        img: paintingImg,
        alt: 'PaintingImg',
        h3: 'Paint  It',
        p: 'Painting web using canvas',
        url: 'https://andonir.github.io/paintit/',
        tech: [<DiHtml5 key={0} className="icon-html"/>, <DiJsBadge key={1} className="icon-js"/>, <FaCss3Alt key={2} className="icon-css"/>]

    },
    {
        img: calculatorImg,
        alt: 'CalculatorImg',
        h3: 'Calculator',
        p: 'A simple calculator',
        url: 'https://andonir.github.io/calculator/',
        tech: [<DiHtml5 key={0} className="icon-html"/>, <DiJsBadge key={1} className="icon-js"/>, <FaCss3Alt key={2} className="icon-css"/>, <FaReact key={3} className='icon-react'/>]


        
    }
]

export const Context = createContext();
export const ContextProvider = (props)=>{
    const [userKey, setUserKey] = useState('');

    return <Context.Provider value={{
        realKey,
        userKey,
        setUserKey,
        mail,
        proyectsData
    }
    }>{props.children}</Context.Provider>
}
