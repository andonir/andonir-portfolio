import { Outlet } from "react-router-dom"
import '../styles/Layout.css'
const Layout = ()=>{
    return <>
    <header>
        <h1>Andoni Roura's portfolio</h1>
    </header>
    <Outlet/>
    </>
}

export default Layout