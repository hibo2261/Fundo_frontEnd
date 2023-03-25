import axios from 'axios'



// User registration
 export async function ussignUp (signUpObject)
 {
   let response =  await axios.post("http://localhost:5000/api/v1/users/", signUpObject);
   return response;
 }


// User Login
 export async function ussignIn (signInObj)

 {
  let response = await axios.post("http://localhost:5000/api/v1/users/Userlogin",signInObj);
  return response;
 }