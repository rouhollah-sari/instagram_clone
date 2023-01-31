import { useState } from "react"
import Header from "./Header";
import Wrapper from "./Wrapper";

const Page=()=>{
console.log("PAge is renderingggggggggggggggggggggggggggggggggg")
    const [addpost,setAddpost]=useState('0');

    
    return(
        <>
        <Header addpost={addpost} AddPOST={()=>setAddpost((addpost)=>addpost+1)}/>
        <Wrapper addpost={addpost} AddPOST={()=>setAddpost(0)}/>
        </>
    )
}

export default Page;