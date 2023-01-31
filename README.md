# instagram_clone
This is a simple version of Instagram. You can post images and share your story. Also commenting is possible. Please go to client folder and open the ReadMe pdf file
to see the pictures.
/////////////////////////////

This is an instruction about this repo. I do not want to describe the coding in details but the information 
in this file will help you to understand more about it. If you have problem in running this repo or you have 
further question about it, please drop me an email on rohol.sari@gmail.com. 
How to use it 
As a developer you most probably installed Nodejs and Mysql on your system and you are familiar with 
the subject. To help more it is worth mentioning that you must install all dependencies inside package.json 
in client and server both. So, open the package.json files and install all the dependencies. 
I used axios in front end and express in back end for sending and receiving http request. These two libraries 
are the core of this repo. 
After installing dependencies, you must create Instagram data base with four tables inside it. 
Be careful about the data base name and tables name. If you make a typo or do not follow upper case and 
lower case letter, the data base will not work. Each Table has the following columns. 
This is stories table. 
………………………………………………………………………………………………………………………………….. 
This is posts table. 
……………………………………………………………………………………………………………………………………… 
This is comments table. 
………………………………………………………………………………………………………………………….. 
And finally this is users tables. 
………………………………………………………………………………………………………………………… 
Now open two terminals in your visual studio code editor and go to your file directory. In the first terminal 
go to client directory and start npm. In the second terminal go to server directory and start npm. The npm 
will open your browser and you are in the log in page of Instagram. Also install Xampp server and run it. 
In Xampp the Document root and directory paths must be set in ‘’/yourfiledirectory/client/public’’ in 
Apache config file. Also be careful about your Mysql port number inside my.ini config file. 
In the browser type “localhost:3000” then Sign up please. Do the job like a real Instagram signing up 
process. In the first sign up page you must add your personal information and finally you will add your 
profile photo. 
Hooray!!!!! 
You are in your home page now. 
1- You can see your username and your profile picture in the page. 
2- You can share a post with description on it. 
3- You can leave a comment on any post. Sign up for several users and comment on the posts and 
see how each comment shows the username. 
4- You can leave your story. 
5- You can see who registered in the page. 
Do not upload videos in post and story. They will accept image right now. I will work on it for accepting 
the videos in future. 
Notes: 
1- Do not delete “DefualtProfileImage” inside ‘’/client/src/images’’.
Final word: Please inform me about the bugs and problems in this repo on rohol.sari@gmail.com. 
