import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context1"

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./styles/App.css";

const key = 123;
function App() {
  const {userKey} = useContext(Context)

  return (
    <>
      <Routes>
        {key !== userKey? (
         
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
