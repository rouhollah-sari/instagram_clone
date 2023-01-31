import React,{useState,useEffect} from 'react'
import "./People.css"
import axios from 'axios'

import {usernameFromLogin} from '../../FirstPage/FirstPage.js' 
import {usernameFromRegister} from '../../FirstPage/SignUp1.js'
import {userimage} from '../Header/UserProfile.js'

var userIm=userimage
var username='';
    
if (usernameFromLogin) {username=usernameFromLogin}
else{username=usernameFromRegister}


function People({username,userIm}){

    return(
        <div style={{marginLeft:"10px"}}>
        <img className="profile-image" src={userIm}/>
        <span style={{marginLeft:'0.75rem'}}>{username}</span>
        </div>
    )
}




const CreatingPeoplELem=()=>{
    console.log("People is rendering")
    const [people,setpeople]=useState([]);
    useEffect(()=>{
    const fetchData= async ()=>{
        try {
            const res= await  axios.get(`http://localhost:5000/api/allusers`)
            
            setpeople(res.data);
            //console.log(post[0].id)
            
        } catch (err) {
            console.log(err)
        }
    };
        
    fetchData();
},[])
    
    const PeoplElem=people.map(user=>{
        return <People username={user.User_Name} userIm={require(`../../../images/${user.img}`)} />
    
    });

    return PeoplElem;
    
}


export default CreatingPeoplELem;

