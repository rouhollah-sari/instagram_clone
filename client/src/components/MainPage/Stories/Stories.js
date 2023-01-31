import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import "./Stories.css"
import CreatingStoryELem from './CreatingStoryElem';
import {usernameFromLogin} from '../../FirstPage/FirstPage.js' 
import {usernameFromRegister} from '../../FirstPage/SignUp1.js'






////////////////////////////////////////////////////////////
function YourStory(){
    console.log("Your story is ran")
    const navigate=useNavigate();

    var username='';
    
    if (usernameFromLogin) {username=usernameFromLogin}
    else if(usernameFromRegister){username=usernameFromRegister}
    else {navigate('/NoPage')}

//////////////////////
const [profileimage,setprofileimage]=useState('DefualtProfileImage');
const [Trig,setTrig]=useState(false);
const [file, setFile] = useState();
      
       
        
        async function  getdata(){
           
        const response=await axios.post("http://localhost:5000/api/data",
        {User_Name:username});
        
        setprofileimage(response.data);

       
        
       

}
        getdata();

        
                
                /////////////////////

                

                //////////////////////
     
      
      
      const submit=async event=>{
        event.preventDefault();
        console.log("this is profile image inside submit",profileimage)
       
          const formData = new FormData()
          formData.append("image", file)
          formData.append("username",username)
          formData.append("userimage",profileimage)


           
        
           const result=await axios.post('http://localhost:5000/api/stories',formData,{ headers: {'Content-Type': 'multipart/form-data'}} )
          //
          setTrig(false)
      }

     const handleClick=()=>{
        
        setTrig(true)
      

     }
    return(
        <>
        <CreatingStoryELem render={Trig}/>
        { Trig 
                                ?<form className='PostForm' onSubmit={submit}>
                                <input className='uploadedImage' filename={file} onChange={e => setFile(e.target.files[0])} type="file"  accept="image/*"></input>
                                <button className='submitbtn' type="submit" >Submit</button>
                                </form>
                                :<div >
                                    
                                        
                                        <div>                              
                                        <img className="user-image" src={require(`../../../images/${profileimage}`)} alt='' onClick={handleClick}/>
                                        <p className='username'>Add story</p>
                                        </div>
                                    
                            </div>
                                    }
            

        </>
    )


}

export default YourStory;


