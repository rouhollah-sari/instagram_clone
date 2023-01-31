import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

import {usernameFromLogin} from '../../FirstPage/FirstPage.js' 
import {usernameFromRegister} from '../../FirstPage/SignUp1.js'

var  userimage=''
var username='';
    


   const UserProfile=()=>{  
    const navigate=useNavigate() 
        
        if (usernameFromLogin) {username=usernameFromLogin}
        else{username=usernameFromRegister} 
        
        const [profileimage,setprofileimage]=useState('DefualtProfileImage');
        async function  getdata(){
           
                const response=await axios.post("http://localhost:5000/api/data",
                {User_Name:username});
                
                if (response.data=='Page not found') {navigate('/NoPage')}
                else{setprofileimage(response.data);}
                
               

                }
                getdata();
                
               
              userimage=profileimage;


            return(
            <>
            <img style={{marginBottom: '0px'}} className='Profilepicture'  src={require(`../../../images/${profileimage}`)  } alt=''/>
            <p style={{marginTop: '0px'}}>{username}</p>
            </>
            )               
        }

        //console.log("This is profile image",userimage)
        export {userimage}
export default UserProfile;
