import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Blog from "./Component/Routes/Blog";
import Conact from "./Component/Routes/Conact";
import Home from "./Component/Routes/Home";
//import { Comone } from "./Component/useContexthook/Comone";
//import Userform from "./Component/useRef/Userform";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/conact" element={<Conact/>}/>
        <Route path='/blog' element={<Blog/>}/>

      </Routes>
    </BrowserRouter>
  );
}