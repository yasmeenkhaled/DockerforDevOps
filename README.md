# Docker With Node.js App
Project Include:
- Docker File
- Docker Compose
    - For Devolopment
    - For Production
- Node.js App
- MongoDB
- Multi Statging
  


## MongoDB Database
1-Before Connect You Need To Install MongoDB:

>sudo apt install -y mongodb

2-You need to add this part in node.js app to declare your database :

![image](https://github.com/user-attachments/assets/d89c4510-15cc-44c5-adfc-a70f24a88974)

3-To build docker compose file and update changing :

> docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

4- To see docker logs and update it auto when save changing using this command :
 
> docker logs node-express-app -f

5-To know which local host ip database connect on :

> docker network ls .
> 
> docker inspect express-app_default .

6- By dafult in docker if u path name of database image auto it will run in default port

###### Docker Connect to MongoDB Database 
![image](https://github.com/user-attachments/assets/f8c0b210-6199-4e2c-adcf-469dce4e1003)

7-To connect database in contanier bash

> docker exec -it express-app_mongo_1 bash

![image](https://github.com/user-attachments/assets/5e3d2089-6d72-4679-b9f9-2c730fcd2958)

8-To display and edit on it using:

> mongosh -u root -p example

9- To show database :

![image](https://github.com/user-attachments/assets/cd315956-2f21-4f89-9523-62383f58c0b7)

10- insert new row :

![image](https://github.com/user-attachments/assets/5f5071f5-18dd-4fd4-abe2-e261d0133f92)

