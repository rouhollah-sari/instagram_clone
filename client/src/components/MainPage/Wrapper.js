import './Wrapper.css';

import YourStory from './Stories/Stories.js';
import CreatingStoryELem from './Stories/CreatingStoryElem.js'
import CreatingPstELem from '../MainPage/Posts/Posts.js'
import CreatingPeoplELem from '../MainPage/People/People.js'


const Wrapper=({addpost,AddPOST})=>{

   
////////////////////////////////
   
console.log("Wrapper is rendering")




    return(
        <div>
           
          

        <div className="Main-div">
            <div>
                    <div className="Stories">
                            
                            <YourStory/>         
                    </div>

                    <div className="Posts">
                        <CreatingPstELem addpost={addpost} AddPOST={AddPOST}/>  
                    </div>
            </div>

            <div>
                    <div className="People">
                        
                        <CreatingPeoplELem/>
                    </div>
            </div>

        </div>
        

        

    </div>
    )

}

export default Wrapper;

/*
   
                    */
