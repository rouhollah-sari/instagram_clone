import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './SignUp1.css';
import axios from 'axios';

var usernameFromRegister='';

function SignUp1(){
        
const navigate=useNavigate()  

const [UserEXist,setUserEXist]=useState(false);
 

      
        const [inputs,setInputs]=useState({
                Mobile_Number_Or_Email:'',
                Full_Name:'',
                User_Name:'',
                Password:'',        
            })     
        
            const handleChange=e=>{
              setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
             
            }
            
   ////////
        
        const submit=async e=>{

                e.preventDefault(); 
                
                try{
                
                    await axios.post("http://localhost:5000/api/register",inputs);
                    
                          
                   
                }catch(err){
                        
                        if (err.response.data==='User already exsits!'){
                        
                        setUserEXist(true);
                        console.log(err.response.data);
                        console.log('UserExist',UserEXist);
                        }

                        if(err.response.data==='User has been Created'){
                                usernameFromRegister=inputs.User_Name;
                                console.log("username inside registerpage",usernameFromRegister)
                                navigate('/AddPhoto')
                                
                        }
                }
                
        }

const GotoLogin=()=>{
        navigate('/')
}
    return(
        <div>
                        
                <div>
                        <div className='Top'>

                                <div className='Imag'>
                                        <img src='images/Background.png' alt='Instagram'/>
                                </div>

                                <div className='form-div'>

                                        <form className='form' onSubmit={submit}>
                                                <img className='InstaLetter' src='images/InstagramIetter.png' alt='Instagram Letter'/>
                                                <p className='letter1'>Sign up to see photos and videos<br/> from your friends</p>

                                                <input required className='Input' type='text' placeholder='Mobile Number or Email' name='Mobile_Number_Or_Email' onChange={handleChange} />
                                                <input required className='Input' type='text' placeholder='Full Name' name='Full_Name' onChange={handleChange}/>
                                                <input required className='Input' type='text' placeholder='User Name' name='User_Name' onChange={handleChange}/>
                                                <input required className='Input' type='text' placeholder='Password' name='Password' onChange={handleChange}/>
                                                
                                                <span className='errorspan'>{(UserEXist===true)&&(<p>The User already exists</p>)}</span>
                                                <p className='letter2'>People who use our service may have uploaded<br/>
                                                your contact information to Instagram. Learn<br/>
                                                More<br/><br/>By signing up, you agree to our Terms , Privacy<br/>
                                                Policy and Cookies Policy .</p>

                                                <button className='SignUpbtn' type="submit" >Sign up</button>        
                                        </form>

                                        <div className='Login'>
                                                <p className='letter1'>Have an account? <button className='Loginbtn' onClick={GotoLogin}>Log in</button></p>       
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
export {usernameFromRegister}
export default SignUp1;
