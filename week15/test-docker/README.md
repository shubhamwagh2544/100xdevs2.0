docker run -d -p 27017:27017 mongo

             mac port : container port
             
mapping pac port to running container port (requests at mac port are sent to container port)

docker rmi <image> // remove image
docker kill <container>
docker run <container>
docker ps

docker rm <containerid> // remove container

// docker file
FROM node:16-alpine // (default shell for alpine image is /bin/sh)

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3005

CMD ["npm", "start"]

docker build -t <name> <fromwhere>  
//docker build -t test-backend .

docker images (image is available locally)

docker run -p 3000:3005 -d test-backend (//requests to container port 3005 are mapped to machine port 3000)

docker kill test-backend or docker kill <containerId>

// passing env variable to image/container
docker run -p 3000:3005 
-e DATABASE_URL="postgres://<username>:<passsword>@<network>/<db>?sslmode=require" 
test-backend

docker exec // to exectue a command inside a container
docker exec -it aec1c94ea979 ls // to see contents of container

docker exec -it <containerId> /bin/sh // ssh into container to get shell access 
(Default shell provided by the base Alpine image is /bin/sh)

docker exec -it <containerId> /bin/bash // ssh into container to get shell access 

In Docker, the default shell can vary depending on the base image you use. 
Here are some common base images where /bin/bash is typically the default shell:

Ubuntu: If you're using an Ubuntu-based image, such as ubuntu:latest, /bin/bash is usually the default shell. 
Debian: Debian-based images, like debian:latest, also often use /bin/bash as the default shell. 
CentOS: CentOS-based images, such as centos:latest, typically use /bin/bash as the default shell. 
Alpine Linux: By default, Alpine uses the Almquist Shell (ash), which is similar to bash but more lightweight.

// To override the default shell in a Dockerfile, you can use the SHELL instruction

# Set the default shell to /bin/bash
SHELL ["/bin/bash", "-c"]

FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3005

CMD [ "node", "dist/index.js" ]

// create docker volume
docker volume create backend

// see volumes in local
docker volume ls

// remove volume from local
docker volume rm <volume_name_or_ID>

// mount the volume to container
1. docker volume create backend
2. docker run -v backend:/data/db -d -p 27017:27017 mongo

// even if we kill container, and run new one with mounting same volume to it, data is persisted
docker kill <containerid>
docker run -v backend:/data/db -d -p 27017:27017 mongo

// create docker network
docker network create backend_network

// view docker networks
docker network ls

// create run mongo container and attach it volume and network
docker run -d -v backend:/data/db --network backend_network -p 27017:27017 --name mongo mongo

// change the mongo url in the backend app
DATABASE_URL='mongodb://mongo:27017/myDatabase'; //(mongo is container name for mongo image running on backend_network)

// build image again
docker build -t backend-2 .

// create run backend container and attach it volume and network
docker run -d  --network backend_network -p 3000:3000 --name backend backend-2

// see logs if mongodb is connected
docker logs backend  // (docker logs <containerId or name>)

