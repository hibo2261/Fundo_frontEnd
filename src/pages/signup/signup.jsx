import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import hi from "../signup/SSS.png"
import hello from "../signup/img-google-1.jpg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { ussignUp } from "../../services/UserService";



const flNameRex = /^[a-zA-Z]{4,}$/;
const uRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRex = /^[A-Za-z]\w{7,14}$/;
//To check a password between 7 to 16 characters which contain only 
//characters, numeric digits, underscore and first character must be a letter



function SignUp() {

  const [signUpObject, setSignUpObject] = React.useState({ firstName: "", lastName: "", UserName: "", password: "" });
  const [signUpObjectRex, setSignUpObjectRex] = React.useState({
    firstNameError: false,
    lastNameError: false,
    firstNameHelper: "",
    lastNameHelper: "",
    UnameError: false,
    UnameHelper: "", 
    passwordError: false,
    passwordHelper: "",

});

const getFname = (event) => {
  setSignUpObject(previousState => ({ ...previousState, firstName: event.target.value }))
}
const getLname = (event) => {
  setSignUpObject(previousState => ({ ...previousState, lastName: event.target.value }))
}
const getUname = (event) => {
  setSignUpObject(previousState => ({ ...previousState, UserName: event.target.value }))
}
const getPassword = (event) => {
  setSignUpObject(previousState => ({ ...previousState, password: event.target.value }))
}



const submit = async () =>
{
  let uTest = uRex.test(signUpObject.UserName);
  let fNameTest = flNameRex.test(signUpObject.firstName);
  let lNameTest = flNameRex.test(signUpObject.lastName);
  let passwordTest = passwordRex.test(signUpObject.password);

  if (fNameTest){
    setSignUpObjectRex(previousState => ({ ...previousState,firstNameError : false, firstNameHelper : "",}))
}

else{
  setSignUpObjectRex(previousState  =>({ ...previousState, firstNameError : true, firstNameHelper : "Enter Min 4 Characters."  }) )
}

if (lNameTest){
  setSignUpObjectRex(previousState => ({ ...previousState, lastNameError : false, lastNameHelper : ""  }))
}

else {
  setSignUpObjectRex(previousState => ({...previousState, lastNameError : true, lastNameHelper : "Enter Min 4 Characters." }))
}

if (uTest){
   setSignUpObjectRex(previousState => ({...previousState, UnameError : false, UnameHelper : ""})) 

}

else {
  setSignUpObjectRex (previousState => ({...previousState, UnameError : true, UnameHelper : "Enter Correct UserName." }))
}

if (passwordTest){ 
  setSignUpObjectRex( previousState => ({ ...previousState, passwordError : false, passwordHelper : "" }) )

}

else{ 
  setSignUpObjectRex ( previousState => ({ ...previousState, passwordError : true, passwordHelper : "Enter Correct Password." }))

}

if (fNameTest && lNameTest && uTest && passwordTest) {
  let data = {
    email: signUpObject.UserName,
    password: signUpObject.password,
    firstname: signUpObject.firstName,
    lastname: signUpObject.lastName,
  };
   
 let response = await ussignUp(data)
 console.log(response)
 // console.log(response,"okkk")
 
}

}
















 return(

   <div className="originsu">

<div className="mbsu">

<div className="data">  {/* data div start */}
<div className="glogo"><img src={hi} alt="" height={30} width={90}/></div>
<div className="sent2">Create your Google Account</div>

<div className="labels1">
<TextField  onChange={getFname}
 id="outlined-basic" 
 label="FirstName" 
 variant="outlined"
  size="small"
  helperText = {signUpObjectRex.firstNameHelper}
  error = {signUpObjectRex.firstNameError} />
<TextField onChange={getLname} 
id="outlined-basic" 
label="LastName"
 variant="outlined" 
 size="small"
 helperText = {signUpObjectRex.lastNameHelper}
  error = {signUpObjectRex.lastNameError}/>
</div>

<div className="labels2">
<TextField onChange={getUname} 
label="UserName" 
id="fullWidth"
 variant="outlined"
  size="small" 
  helperText = {signUpObjectRex.UnameHelper}
  error = {signUpObjectRex.UnameError} />
<div className="sent4"><a href="#">Use my current email address instead</a></div>
</div>



<div className="labels3">
<TextField onChange={getPassword}
helperText = {signUpObjectRex.passwordHelper} 
error = {signUpObjectRex.passwordError}
 id="outlined-basic"
 label="Password" 
 variant="outlined"
  size="small" />
<TextField onChange={getPassword}
id="outlined-basic" 
label="Confirm" 
variant="outlined"
 size="small"
 helperText = {signUpObjectRex.passwordHelper} 
error = {signUpObjectRex.passwordError}/>
</div>

<div className="sent3"> Use 8 or more characters with a mix of letters, numbers & symbols</div>



<div className="label4">
<FormControlLabel control={<Checkbox defaultChecked />} 
label="Show password" />
</div>

<div className="buttons2">
<div><a href="#">Sign in instead</a></div>
<div><Button onClick={submit} 
variant="contained">Next</Button></div>
</div>


</div>{/* data div end */}


<div className="per"> 
<img className="uiimg" src={hello}/>
<div className="sent1">One account. All of Google<br /> working for you.</div>
</div>

  </div>
  </div>

 )}

export default SignUp;