import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './FirstPage.css';
import axios from 'axios';


var usernameFromLogin='';

 function FirstPage(){
    
    
    const navigate=useNavigate() 
      
    const [WrongUserPass,setWrongUserPass]=useState(true);
    const [inputs,setInputs]=useState({
        User_Name:'',
        Password:'',        
    }) 
        
 

    const handleChange= e=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}));
      
 
   }
      
     const submit=async e=>{

        e.preventDefault(); 
        try{
        
            await axios.post("http://localhost:5000/api/login",inputs); 
                  
        }catch(err){
                
                if (err.response.data==='User Authenticated') {

                        usernameFromLogin=inputs.User_Name;
                        
                       navigate('/Home')
                       
                        

                };
                if (err.response.data==='Wrong user name or Password') {
                        setWrongUserPass(false); 
                };  
        }
}



     
        const SignUpbtn=()=>{
            navigate('/Register')
        }
        //////////////////////////
    return(
        <div>
               
                <div>
            <div className='Top'>

                        <div className='Imag'>
                                <img src='images/Background.png' alt='Instagram Image'/>
                        </div>

                <div className='form-div'>
        
                        <form className='form' onSubmit={submit}>
                                <img className='InstaLetter' src='images/InstagramIetter.png' alt='Instagram Letter'/>


                                
                                <input  className='Input' type='text' placeholder='Username' name='User_Name' onChange={handleChange} required/>
                                <input  className='Input' type='text' placeholder='Password' name='Password' onChange={handleChange} required/>
                                                        
                                <button className='LogInpbtn' type="submit">Log In</button>
                                <span className='errorspan'>{(WrongUserPass===false)&&(<p>Wrong User name or Password,<br/>Please sign up</p>)}</span>
                                </form>
                                <button className='Forgotbtn'>Forgot password?</button>     
                        
                        
                        <div className='Signup'>
                                <p className='letter1'>Don't have an account? <button className='Signupbtn' onClick={SignUpbtn} >Sign up</button></p>            
                        </div>

                        <p className='Gettheapp'>Get the app.</p>


                        <div className='Appstorimage'>
                                <a href="nfgbf">
                                <img className='AppImage' src='images/Appstore.png' alt='App'/>
                                </a>

                                <a href="nfgbf">
                                <img className='Googimage' src='images/Googleplay.png' alt='App'/>
                                </a>
                        </div>
                        

                       
          
                </div>

                                
                        
                      

                
            </div>

        </div>
        
        
        </div>
        
    )

}

export {usernameFromLogin}
export default FirstPage;


