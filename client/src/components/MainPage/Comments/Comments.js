import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Comments.css'

import {usernameFromLogin} from '../../FirstPage/FirstPage.js' 
import {usernameFromRegister} from '../../FirstPage/SignUp1.js'
var  username=''
////////////////
const SingleCommentElem=({COM,username})=>{

  return(<>
    
    <p style={{fontWeight:'600'}}>{username}:<span style={{fontWeight:'400'}}>{COM}</span></p>
    
    
    </>)

}
////////////
const PostedComment=(props)=>{
  console.log("props.Trig is",props.Trig)
  const [SharedComment,setSharedComment]=useState([]);
  
     
       useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const response=await axios.post("http://localhost:5000/api/CD",
                {POSTID:props.ID});
                
                
                //console.log("response.data",response.data)
                //if(response.data[0].Comment){setSharedComment(response.data[0].Comment);}
                if(response.data[0]){setSharedComment(response.data)}
                else(setSharedComment([]))
                    
            } catch (err) {
                console.log(err)
            }
        };
        
    
        fetchData();
        //console.log("useEffect inside PostedComment is rendering")
        //console.log("SharedComment",SharedComment)
    },[props.Trig])
         
    const SharedCommentElem=SharedComment.map(comm=>{
      //console.log("Each comm",comm)
      return <SingleCommentElem COM={comm.Comment} username={comm.Username}/>
    }
    )

       return SharedCommentElem
}
//////////////
const Comments=(props)=>{

  //console.log("Props.ID",props.ID)
 
    if (usernameFromLogin) {username=usernameFromLogin}
    else{username=usernameFromRegister} 
    
    const [emptyCommentField,setemptyCommentField]=useState(false)
    const [Trig,setTrig]=useState(false);  // This is for re rendering the comment component
    const [inputs,setInputs]=useState({
      User_Name:username,
      comment:'',  
      postId:props.ID,
      
      //postId:'1'    
  }) 
    const handleChange= e=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}));
     
      //console.log("inputs.postId",inputs.postId)
      setTrig(false)
      if (emptyCommentField){e.target.value=''; setemptyCommentField(false)}
      
      
   }
///inputs.postId=props.ID
    const Postbtn=async event=>{
      event.preventDefault(); 
          inputs.postId=props.ID
          console.log("inputs.postId",inputs)  
        await axios.post("http://localhost:5000/api/comment",inputs);   
        console.log("inputs.postId",inputs.postId)
        
        setTrig(true)
        setemptyCommentField(true)
        
            }
      ////////////////
      return(
        <>
        <div><PostedComment Trig={Trig} ID={props.ID} username={props.username}/></div>
           
        <div  style={{ height:'50px'}}>
    
                <form className='comments-div' >
                  <button className='emojibtn'><img src='images/emoji.png' alt=''/></button>
                  <input className='commentsArea' type="Text" placeholder='Add a comment...' name='comment' onChange={handleChange}/>
                  <button className='Postbtn'  onClick={Postbtn} >Post</button>
    
              </form>
        </div>
        </>
    )
}

export default Comments;
