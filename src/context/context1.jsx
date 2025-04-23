import { createContext } from "react";
const mail = 'andoniroura@outlook.es';
const proyectsData = [
    {
        img: '../../../public/img/GlowingYouUp-logo.png',
        alt: 'GlowingYouUpImg',
        h3: 'GlowingYouUp',
        p: 'Blog about personal development',
        url: 'https://glowingyouup.github.io/'
        
    },
    {
        img: '../../../public/img/weather img.png',
        alt: 'WheaterImg',
        h3: 'Wheather Searcher',
        p: 'Weather Searcher using API',
        url: '/proyects/weather-searcher'
        
    },
    {
        img: '../../../public/img/painting img.png',
        alt: 'PaintingImg',
        h3: 'Paint  it',
        p: 'Painting web using canvas',
        url: '/proyects/paint-it'

    },
    {
        img: '../../../public/img/calculator.png',
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
