
import React from 'react'
import './Header.css'
import UserProfile from './Header/UserProfile.js'
import InstagramIetter from './Header/InstagramIetter.js'
import SearchInput from './Header/SearchInput.js'
import Homebtn from './Header/Homebtn.js'
import Directbtn from './Header/Directbtn.js'
import PostPart from './Header/PostPart.js'
import Navbtn from './Header/Navbtn.js'
import Likebtn from './Header/Likebtn.js'


function Header({addpost,AddPOST}){  
 
     return(

          <div className='main-div-Header'>
                
             
              <InstagramIetter/>
              <SearchInput/>
        
          
          
          <div className='icon'>
              <div>
              <Homebtn/>
              <Directbtn/>
              <PostPart addpost={addpost} AddPOST={AddPOST}/>
            

              <Navbtn/>
              <Likebtn/> 
              </div>   
              <div>
              <UserProfile/>
              </div> 
              
          </div>
          
          </div>

      
    )
   
}

export default Header;

