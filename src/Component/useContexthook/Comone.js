import React, { useState } from 'react'
import Comtwo from './Comtwo'
import { Usercontext } from './Usecontext'


export const Comone = () => {
    const[user,setuser]=useState({id:1, name:"nishi"})
    const[data,sedata]=useState("hello i am nishi")
  return (
   
        <Usercontext.Provider value={{user,data}}>
            <Comtwo/>
        </Usercontext.Provider>
    
  )
}
