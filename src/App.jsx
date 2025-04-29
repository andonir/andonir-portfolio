import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context1"

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./styles/App.css";

function App() {
  const {userKey, realKey} = useContext(Context)

  return (
    <>
      <Routes>
        {realKey !== userKey? (
         
          <Route path="/" element= {<Login/>}></Route>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
