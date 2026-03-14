import React, { useState } from 'react';

function useLogin(isUser) {
  const [response , setResponse] = useState(null);
 const [error , setError] = useState(null);
  const userOrSeller = isUser ? 'user' : 'seller';
 
async function login(email , password) {
  console.log(email , password);
   try { 
     const apiResponse  = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/${userOrSeller}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: email,
      password: password,
    })
  });
  let data = await apiResponse.json();
  setResponse(data);
   } catch (error) {
    setError(error);
   }
}

   return [ login , response , error];
}

export default useLogin;