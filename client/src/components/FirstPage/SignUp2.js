import React,{useState} from 'react'
import './SignUp2.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {usernameFromRegister} from '../FirstPage/SignUp1.js'


function SignUp2(){

const username=usernameFromRegister;
    
    const navigate=useNavigate()

    const [Trig,setTrig]=useState(false);
    const [file, setFile] = useState();
    
    const submit  = async event => {


        event.preventDefault()
        
    
      const formData = new FormData()
      formData.append("image", file)
      formData.append("username",username)   
    
    
      const result = await axios.post('http://localhost:5000/api/profileimages', formData, { headers: {'Content-Type': 'multipart/form-data'}})
      console.log(result.data)
      navigate('/Home')
      setTrig(false)
     

      }
     
     const AddPhoto=()=>{
        setTrig(true)
        
     }
     
   

 return(
<div>
        
        
            <div className='container'>

                
                               
                                <p className='letter1'>Add profile photo<br/></p>
                                <p className='letter2'>Add a profile photo so that your friends know<br/>it's you</p>                         
                                <img className='img' src='images/addphoto.jpg' alt=''/>
                                { Trig 
                                ?<form className='PostForm' onSubmit={submit}>
                                    <input className='uploadedImage' filename={file} onChange={e => setFile(e.target.files[0])} type="file"  accept="image/*"></input>
                                    <button className='submitbtn' type="submit" >Submit</button>
                                </form>
                                : <button className='Nextbtn' onClick={AddPhoto}>Add a Photo</button> 
                                
                                    }
                                                   
                               
            </div>
            

            </div>
    )
    
    }


export default SignUp2;
