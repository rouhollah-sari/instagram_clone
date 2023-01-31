import React,{useState,useEffect} from 'react'
import "./Posts.css";
import axios from 'axios'
import Comments from '../Comments/Comments.js'




function  Posts({Postedimg,Profilimg,name,descc,postId}){
       //console.log("Post id is",postId)
    return(
           
        <div style={{marginTop:"10px"}}>
                <div style={{marginLeft:"10px"}}>
                <img className="profile-image" src={Profilimg} alt=''/>
                
                <span style={{marginLeft:'0.75rem'}}>{name}</span>
                </div>
                <div style={{marginTop:"10px"}}>
                <img  className="image" src={Postedimg} alt=''/>
                {descc ? <><p style={{fontWeight:"850"}}>{name}:<span style={{fontWeight:"normal"}}>{descc}</span></p></>
                        :<></>
            
                }
                
                <Comments ID={postId} />
                </div>
                
       
        </div>
    )


}

//////////////////////////////////
//date= "", descc="aros cheghad ghashangeh",id=6,img="8a4055b14298d4c5a8348252a4aaa537",userimage="01912c65dd3f3407f97286f8ba90c4a0", username="test1"
const CreatingPstELem=({addpost,AddPOST})=>{
   console.log("addpost",addpost)
    const [posts,setPosts]=useState([]);
useEffect(()=>{
    const fetchData= async ()=>{
        try {
            const res= await  axios.get(`http://localhost:5000/api/posts`)
            
            setPosts(res.data);
            
            
            

        } catch (err) {
            console.log(err)
        }
    };
    
    
    fetchData();
    
    console.log("posts",posts)
    console.log("addpost",addpost)

},[addpost])


    const PostElem=posts.map(post=>{
        //console.log({post})
        return <Posts  postId={post.id} descc={post.descc} Postedimg={require(`../../../images/${post.img}`)}  name={post.username} Profilimg={require(`../../../images/${post.userimage}`)}/>
    
    });
    
    return PostElem;
    
}


export default CreatingPstELem;



