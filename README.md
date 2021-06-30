# Welcome to ourActiveSchool application server
## To visit our website follow the link below:
http://3.137.144.158/.</br> 
</br>
![](img/loginPage.png) 
</br>
## Getting up and running
To get the Node server running locally: <br/>
  • Clone this repo <br/>
  • run	cd ActiveSchool <br/>
  •	To install all required dependencies: run npm install <br/>
  • To start the local server: run npm start <br/>
  •	copy the link  http://localhost:3200 in the browser to see the server running. <br/>
Now the server is waiting the clientside to run. <br/>
Download Clientside from this link (https://github.com/Maymaher/ActiveSchool-ClientSide). <br/>
 
## Built With
  •	Nodejs  <br/>
  •	Mongodb <br/>
  •	Express <br/>
   <br/>
## Dockerize Express and Mongodb
  • Create Dockerfile to the root serverside folder.<br/>
  ![](img/Dockerfile.png) <br/>
  <br/>
  • Create docker-compose.yml file to run Express together with mongodb. <br/>
  ![](img/Dockercompose.png) <br/>
  <br/>
  • To build the images : run docker-compose build <br/>
  • To run the containers: run docker-compose up <br/>


