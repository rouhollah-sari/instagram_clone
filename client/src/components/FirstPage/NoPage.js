
import {useNavigate} from 'react-router-dom'



const NoPage =()=>{

    const navigate=useNavigate();
    const GotoLogin=()=>{
     
      navigate('/');
    }
    return(
    <div>
                <h2>Page not found</h2>
                <h2>Please Log in Or Sign up</h2>
                <button onClick={GotoLogin}>Log in</button>
              </div>
              )
}

export default NoPage;