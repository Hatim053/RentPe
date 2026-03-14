import React, { useState } from 'react';


function useSignup(isUser) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    async function sellerSignup(fullName, email, username, password, location, mobileNo, businessType) {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/seller/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email,
                    username,
                    password,
                    location,
                    mobileNo,
                    businessType,
                })
            })
            let data = await response.json()
            setResponse(data);
        } catch (error) {
            setError(error);
        }
    }
    
    async function userSignup(username , email , password) {
        try {
             const response = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/user/signup` , {
    method : 'POST',
    headers: {
    "Content-Type": "application/json",
  },
  body : JSON.stringify({
    username,
    email,
    password,
  })
  })

  let data = await response.json()
  setResponse(data);
        } catch (error) {
            setError(error);
        }
    }

  return  isUser ?  [userSignup, response, error] : [sellerSignup, response, error];

}

export default useSignup;