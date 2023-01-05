import React , { createContext, useState } from 'react';
import { BASE_URL} from './../constants'
import axios from 'axios'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  let login = async ({payload})=>{
    setAuth(true)

    let response = await axios.post(`${BASE_URL}/auth/login`, payload)
    console.log(payload)
  }


  return <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
