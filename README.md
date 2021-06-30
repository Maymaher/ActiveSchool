# Welcome to our ActiveSchool application serverside
## To visit our website follow the link below:
http://3.137.144.158/.</br> 
</br>
![](img/loginPage.png) 
</br>
## Getting up and running
To get the Node server running locally: </br> 
  • Clone this repo
  ```sh
  git clone https://github.com/Maymaher/ActiveSchool.git
  ```
  • Change the directory to	ActiveSchool  
  ```sh
  cd ActiveSchool 
  ```
  •	To install all required dependencies
  ```sh
  run npm install
  ```
  • To start the local server
  ```sh
  run npm start
  ```
  •	copy the link  http://localhost:3200 in the browser to see the server running. </br> 
Now the server is waiting the clientside to run. </br> 
Download Clientside from this link (https://github.com/Maymaher/ActiveSchool-ClientSide). </br> 
 
## Built With
  •	Nodejs  </br> 
  •	Mongodb </br> 
  •	Express </br> 
   <br/>
## Dockerize Express and Mongodb
  • Create Dockerfile to the root serverside folder.</br> 
  </br> 
  ![](img/Dockerfile.png) </br> 
  </br> 
  • Create docker-compose.yml file to run Express together with mongodb. <br/>
  ![](img/Dockercompose.png) </br> 
  </br> 
  • To build the images : run docker-compose build </br> 
  • To run the containers: run docker-compose up </br> 


