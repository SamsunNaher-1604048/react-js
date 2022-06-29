import React,{useContext} from 'react'
import { Usercontext } from './Usecontext';

const Comthree = () => {
    const {user,data}=useContext(Usercontext)
    console.log(user)
    console.log(data)
  return (
    <div>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{data}</h1>
    </div>
  )
}

export default Comthree;