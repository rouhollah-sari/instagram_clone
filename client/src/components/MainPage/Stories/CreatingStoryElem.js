

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../Stories/Stories.css'

function  Story({storyimg,profilimg,name}){

    //console.log('Story is rendering final element')
    const [Trig,setTrig]=useState(false);

    const ChangeStory=()=>{
            
        setTrig(false)
    }
    const TimeOut=()=>setTimeout(ChangeStory,3000);
    

    const handlclick=()=>{
        
        setTrig(true);
        TimeOut();
    }

    
    return(
         <> 
          
        {Trig ? <>  
                    <img className="Stories-image" src={storyimg} alt=''/>
                    <h3 className='user'>{name}</h3>
                </>
        
        
        :<div><img className="user-image" src={profilimg} alt='' onClick={handlclick}/>
                                <p className='username'>{name}</p>
                                </div>
                                
                                }
        
        </> 
        
    )


}

       ////////////////////         
                function CreatingStoryELem(props){

                    console.log("storElem rerendere")
                    const [stories,setStories]=useState([]);
                    useEffect(()=>{
                    const fetchData= async ()=>{
                        try {
                            const res= await  axios.get(`http://localhost:5000/api/stories`)
                            
                            setStories(res.data);
                            
                            
                            
                
                        } catch (err) {
                            console.log(err)
                        }
                    };
                    
                    
                    fetchData();
                    //console.log("story Useeffect ran")process.env.PUBLIC_URL+`/pictures/${profileimage}`
                },[props.render])
                    
                    const StoriesElem=stories.map(story=>{
                        console.log(" story Map is rendering")
                        return <Story storyimg={require(`../../../images/${story.storyimg}`)} profilimg={require(`../../../images/${story.userimage}`)}  name={story.username}/>
                    
                    });
                        return  StoriesElem;
                }


                export default CreatingStoryELem;
                
  /*
  storyimg={require(`../../../images/${story.storyimg}`)}
  */