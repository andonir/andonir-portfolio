import { createContext } from "react";
import calculatorImg from '../../public/img/calculator.png'
 import GlowingYouUpImg from '../../public/img/GlowingYouUp.png'
 import paintingImg from '../../public/img/painting.png'
 import weatherImg from '../../public/img/weather.png'
 const mail = 'andoniroura@outlook.es';
const proyectsData = [
    {
         img: GlowingYouUpImg,
        alt: 'GlowingYouUpImg',
        h3: 'GlowingYouUp',
        p: 'Blog about personal development',
        url: 'https://glowingyouup.github.io/'
        
    },
    {
         img: weatherImg,
        alt: 'WheaterImg',
        h3: 'Wheather Searcher',
        p: 'Weather Searcher using API',
        url: '/proyects/weather-searcher'
        
    },
    {
         img: paintingImg,
        alt: 'PaintingImg',
        h3: 'Paint  it',
        p: 'Painting web using canvas',
        url: '/proyects/paint-it'

    },
    {
        img: calculatorImg,
        alt: 'CalculatorImg',
        h3: 'Calculator',
        p: 'A simple calculator',
        url: '/proyects/calculator'

        
    }
]
export const Context = createContext();
export const ContextProvider = (props)=>{
    return <Context.Provider value={{
        mail,
        proyectsData
    }
    }>{props.children}</Context.Provider>
}
