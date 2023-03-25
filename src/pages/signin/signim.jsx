import React from "react";
import './signin.css'
import TextField from '@mui/material/TextField';
 import { Button } from '@mui/material';
import { ussignIn } from "../../services/UserService";


 const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
 const passwordRegex = /^[A-Za-z]\w{3,14}$/;
 //To check a password between 7 to 16 characters which contain only 
 //characters, numeric digits, underscore and first character must be a letter

 //a2sdfghjk

function SignIn() {

    const [signInObject, setSignInObject] = React.useState({ email : "",password : ""})

    const [siginInObjectRegex , setSiginInObjectRegex] = React.useState({


        emailError : false,
        passwordError : false,
        emailHelper : "",
        passwordHelper : "",
    })



    const getEmail = (event) => {
        setSignInObject((prevState) => ({ ...prevState, email : event.target.value }));
  };

    const getPassword = (event) => {
        setSignInObject((prevState) => ({ ...prevState, password : event.target.value }));

    };




  const submitForm = async () =>
  {
    let emailTest = emailRegex.test(signInObject.email)
     if (emailTest){
        setSiginInObjectRegex((prevState) => ({
            ...prevState,
            emailError: false,
            emailHelper: "",
     }))}

     else {
        setSiginInObjectRegex((prevState) => ({
            ...prevState,
            emailError: true,
            emailHelper: "Please Enter Correct Email.",
     }))}

     let passwordTest = passwordRegex.test(signInObject.password)
     if (passwordTest){
        setSiginInObjectRegex((prevState) => ({
            ...prevState,
            passwordError: false,
            passwordHelper: "",
     }))}

     else {
        setSiginInObjectRegex((prevState) => ({
            ...prevState,
            passwordError: true,
            passwordHelper: "Please Enter Correct Password.",
     }))}



     if(emailTest && passwordTest){

        let response = await ussignIn(signInObject)
        console.log(response)
        console.log(response.data.data)
        localStorage.setItem('token',response.data.data)
     }

  }








   return (
 
         <div className="origin1">
   <div className="mainbox">
   <div className="googlelogo"> <img src={require('../signin/Screenshot 2023-02-17 at 17-39-15 Sign in - Google Accounts.png')}  height = "60"/></div>
   <div className="signinoption">Sign In</div>
   <div className="sen1">Use your Google Account</div>
   <div className="inputs">
                    <div className="email">
                        <TextField fullWidth label="Email" id="fullWidth"  size="small"  helperText={siginInObjectRegex.emailHelper}  error={siginInObjectRegex.emailError} onChange={getEmail} />
                    </div>
                    <div className="password">
                        <TextField  fullWidth label="Password" id="fullWidth" size="small"  helperText={siginInObjectRegex.passwordHelper} error={siginInObjectRegex.passwordError} onChange = {getPassword} />
                    </div>
                </div>
                <div className="sen2">Not your computer? Use Guest mode to sign in privately</div>
                <div className="buttoninputs">
                    <div className="button1"><a href="">Create Account</a></div>
                    <div className="button1"><Button variant="contained" onClick={submitForm}>Next</Button></div>
                </div>
   </div>
   </div>
   
  )
}

export default SignIn;