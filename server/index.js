const multer = require('multer')


// 2
const upload = multer({ dest: '../client/src/images/' })
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser')
const app=express();
const mysql=require('mysql');




const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'instagram',
    port:'3306'

})

app.use('../client/src/images', express.static('images'))
app.use(cors());
app.use(express.json());


/// Global variable for username

app.post('/api/register',(req,res)=> {

    const Mobile_Number_Or_Email=req.body.Mobile_Number_Or_Email;
    const Full_Name=req.body.Full_Name;
    const User_Name=req.body.User_Name;
    const Password=req.body.Password;


        //CHECK EXISTING USER
        const q=" SELECT * FROM instagram.users WHERE Mobile_Number_Or_Email=? OR User_Name=?"

        db.query(q,[req.body.Mobile_Number_Or_Email, req.body.User_Name],(err,data)=>{

       if (err) return res.json(err)
       if (data.length) return res.status(409).json('User already exsits!')
       if(!data.length) {

        const sqlInsert="INSERT INTO instagram.users (Mobile_Number_Or_Email,Full_Name,User_Name,Password) VALUES(?,?,?,?)";
        db.query(sqlInsert,[Mobile_Number_Or_Email,Full_Name,User_Name,Password],(err,result)=>{
             
        console.log(req.body.Full_Name)
            
        })
           username=User_Name;
            return res.status(409).json('User has been Created')

       }
    
    
    })
        
       ////////////////////


   
    
});


///
app.post('/api/login',(req,res)=> {

    const User_Name=req.body.User_Name;
    const Password=req.body.Password;
    

        //CHECK User_name and Password 
        const q=" SELECT * FROM instagram.users WHERE User_Name=? AND Password=?"

        db.query(q,[User_Name,Password],(err,data)=>{
            
            
     
       if (err) return res.json(err);
       if (data.length===0) {return res.status(409).json('Wrong user name or Password');}
       if (data.length===1) {
        username=User_Name;
        return res.status(409).json('User Authenticated');}
       
        
    })   
  
});



//////////////
app.post('/api/postimages',upload.single('image'), (req, res) => {

    //console.log(req.file)
    
    const filename=req.file.filename
    const descc = req.body.description
    const username = req.body.username
    const userimage=req.body.userimage
    
    
  
    const q="INSERT INTO instagram.posts (img,descc,username,userimage) VALUES(?,?,?,?)";
        db.query(q,[filename,descc,username,userimage],(err,result)=>{
                         
        })
  
    console.log(descc,username,filename,userimage)
    res.send({filename,descc,username,userimage})
  })
/////////////////////
app.post('/api/profileimages',upload.single('image'), (req, res) => {
    
    const filename=req.file.filename
    const username = req.body.username
    profileimage=filename;
    
  
    const q='UPDATE instagram.users SET img=? WHERE User_Name=?;'
        db.query(q,[filename,username],(err,result)=>{
                         
        })
  
    //console.log(username,filename)
    res.send({filename,username})
  })
//////////////////////
app.get('/api/posts',(req,res)=>{
    const q="SELECT * FROM instagram.posts ORDER BY id DESC;"
    db.query(q,(err,result)=>{
        if(err) res.status(401).json('Somthing in the posts table is wrong')
        res.send(result)
})
})
//////////////////////////
app.post('/api/data',(req,res)=> {
    

        const User_Name=req.body.User_Name;
        console.log('User_Name',User_Name)
        if (User_Name=='') res.status(200).send('Page not found')
        else{
        const q=" SELECT * FROM instagram.users WHERE User_Name=?"
        db.query(q,User_Name,(err,data)=>{ 
        //console.log(data[0].img);
        //console.log('I am getting the request form post')
        if (err) return res.json(err);
        if(!err) return res.status(200).send(data[0].img)
        
        
    })  
}
});
////////////////////////////////////////////
app.get('/api/allusers',(req,res)=>{
    const q="SELECT * FROM instagram.users ORDER BY id DESC;"
    db.query(q,(err,result)=>{
        if(err) res.status(401).json('Somthing in the users table is wrong')
        res.send(result)
})
})
///////////////////////////////////////
app.post('/api/stories',upload.single('image'), (req, res) => {

    console.log("Inside stories")
    
    const filename=req.file.filename
    const username = req.body.username
    const userimage=req.body.userimage
   
    
    
  
    const ql="INSERT INTO instagram.stories (storyimg,username,userimage) VALUES(?,?,?)";
        db.query(ql,[filename,username,userimage],(err,result)=>{
                         
        })
  
    console.log('This is inside stories',username,filename,userimage)
    res.send({filename,username,userimage})
  })

//////////////////////////////////////

app.get('/api/stories',(req,res)=>{
    const q="SELECT * FROM instagram.stories;"
    db.query(q,(err,result)=>{
        if(err) res.status(401).json('Somthing in the users table is wrong')
        res.send(result)
})
})
////////
app.post('/api/comment', (req, res) => {

  
    const COMMENT = req.body.comment
    const USERNAME = req.body.User_Name
    const POSTID=req.body.postId
    
    //console.log('COMMENT',req.body)

    

    const q="INSERT INTO instagram.comments (postId,Username,Comment) VALUES(?,?,?)";
       db.query(q,[POSTID,USERNAME,COMMENT],(err,result)=>{
                         
       })
  
    
    res.send({COMMENT,USERNAME,POSTID})
 })
 //////////////////////
 app.post('/api/CD',(req,res)=> {
    

    const POSTID=req.body.POSTID;
    console.log('POSTID',POSTID)
    
    const q=" SELECT * FROM instagram.comments WHERE postId=?"
    db.query(q,POSTID,(err,data)=>{ 
    //console.log('data[0]',data[0]);
    //console.log('I am getting the request form CD')
    if (err) return res.json(err);
    
    if(data[0]!=='undefined') return res.status(200).send(data)
    
    
})  

});

/////////////////////
app.listen(5000,()=>{
    console.log('The server is running on port 5000')
});



