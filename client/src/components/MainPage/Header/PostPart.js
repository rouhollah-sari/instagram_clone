import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {usernameFromLogin} from '../../FirstPage/FirstPage.js' 
import {usernameFromRegister} from '../../FirstPage/SignUp1.js'
import {userimage} from './UserProfile.js'


var username='';     

 const PostPart=({addpost,AddPOST})=>{
 
  
  if (usernameFromLogin) {username=usernameFromLogin}
          else{username=usernameFromRegister}

      const profileimage=userimage;
        
      const [Trig, setTrig] = useState(false);
      const [description, setDescription] = useState("");
      const [file, setFile] = useState();  

  const Postbtn=()=>{
          
       setTrig(true)
       console.log("addpost",addpost)
      
      }
 
       const submit=async event=>{
          event.preventDefault()
          
          const formData = new FormData()
          formData.append("image", file)
          formData.append("description",description)
          formData.append("userimage",profileimage)
          formData.append("username",username)
        
          const result= await axios.post('http://localhost:5000/api/postimages',formData,{ headers: {'Content-Type': 'multipart/form-data'}} )
        
          console.log('description',description)
          setTrig(false)
          AddPOST();
          
        
        }
          
        console.log("PostPart is rendering")

        return(
          <>
          
          
        {Trig
          ?<form className='PostForm' onSubmit={submit}>
          <input className='uploadedImage' filename={file} onChange={e => setFile(e.target.files[0])} type="file"  accept="image/*"></input>
          <input className='postcomment' type='text'  placeholder='Write about your post' onChange={e=>setDescription(e.target.value)}/>
          <button className='submitbtn' type="submit" >Submit</button>
          </form>
          : <button className='Post' onClick={Postbtn}></button>
          
          
          
        }
        </>
        )  
 }

export default PostPart;


//<button className='Post' onClick={Postbtn}></button>