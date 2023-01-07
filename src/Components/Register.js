/*import React, { useState } from 'react';


const register = (ev)=> {
    ev.preventDefault();
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: registerUsername,
          password: registerPassword 
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if(!result.success){
        throw result.error;
      }
      console.log(result);

    })
    .catch( err => console.log(err));
  }






export default Register;