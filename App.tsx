import * as React from 'react';
import './style.css';
import { useContext, useRef} from 'react'
import AuthContext from './context/AuthContext'

interface Ivalue{
  email: string
  password:string
}

export default function App() {
  
  const emailRef = useRef<null | HTMLFormElement>(null)

  const passwordRef = useRef<null | HTMLFormElement>(null)
  const { login } = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    

    let payload  ={
      email:emailRef.current.value,
      password: passwordRef.current.value
    }

    console.log(payload)
    login(payload)
  }

 

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        <h1>login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>username</label>
              <input ref={emailRef} type="text" />
            </div>
            <div>
              <label>password</label>
              <input ref={passwordRef} type="text" />
            </div>
            <br/>
            <button>login</button>
          </form>
        
      
      </div>
    </div>
    </div>
  );
}
