import React, { useState } from "react";
import Message from "./Component/Meno()/Message";
// import { BrowserRouter,Routes,Route } from "react-router-dom";


// import Blog from "./Component/Routes/Blog";
// import Conact from "./Component/Routes/Conact";
// import Home from "./Component/Routes/Home";
//import { Comone } from "./Component/useContexthook/Comone";
//import Userform from "./Component/useRef/Userform";



export default function App() {
  const[count,Setcount]=useState(0)

  const increment=()=>{
    Setcount(count+1)
  }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/conact" element={<Conact/>}/>
    //     <Route path='/blog' element={<Blog/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>increment</button>
      <Message/>
    </div>
  );
}