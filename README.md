# Simple Contact Manager webapp using docker
## Using nodejs (express) / reactjs / posgresql (docker)

### Based on [Contact Manager](https://github.com/yblee85/contact_manager)



### Run Db image

1. in db directory

   ```
   $ docker run -d \
       --name {CONTAINER_NAME_YOU_WANT_TO_USE} \
       --network contact-manager-network \
       -p 5432:5432 \
       -e POSTGRES_PASSWORD={MY_SECRET_PASS} \
       -e PGDATA=/var/lib/postgresql/data/pgdata \
       -v ${PWD}/volumes:/var/lib/postgresql/data \
       postgres:9.6`
    
   ```





### Build api docker image and run

2. in api directory, I alredy created Dockerfile
3. docker build -t yunbo/contact-manager-api:1.0 .
4. docker run -p 8080:8080 --env-file ./.env --network contact-manager-network --name api yunbo/contact-manager-api:1.0
   1. If network not created yet,
   ```
   $ docker network create contact-manager-network




### Build frontend docker image and run

5. in frontend directory, I already created Dockerfile
6. docker build -t yunbo/contact-manager-frontend:1.0 .
7. docker run -p 8001:8080 --network contact-manager-network --name frontend yunbo/contact-manager-frontend:1.0
   


### Run app

8. when all dockers are running, go to localhost:8001




### Screenshots

![](_readme_assets/contact_manager_home.png)



![](_readme_assets/contact_manager_edit.png)


### TODO
1. in api, we will need to add login that returns jwt token
2. in frontend, api controller, instead of using simple http request style, it should be api manager that gets token and refresh if it expires