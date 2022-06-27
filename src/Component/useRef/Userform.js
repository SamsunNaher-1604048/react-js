import React, { useRef } from 'react'

const Userform = () => {

    const usernameRaf=useRef();
    const passwordRaf=useRef();

    const onHendl=(event)=>{
        event.preventDefault();
        const username=usernameRaf.current.value;
        const password=passwordRaf.current.value
        console.log({username,password})

    }

  return (
    <form onSubmit={onHendl}>
        <div>
            <label htmlFor='username'>  name:</label>
            <input type='text' id="username" ref={usernameRaf}/>
        </div>
        <div>
            <label htmlFor='password'>password:</label>
            <input type='password' id="password" ref={passwordRaf}/>
        </div>
        <button type='submit'>register</button>
    </form>
  )
}

export default Userform