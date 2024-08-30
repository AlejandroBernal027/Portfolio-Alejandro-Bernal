#!/bin/bash
docker pull alejandrobeor/indiecovedocker
docker network create -d bridge --subnet 172.28.0.0/16 –gateway 172.28.0.1 redDocker
docker run -it --name indiecoveDocker --network redDocker --ip 172.28.0.10 -p 8787:87 alejandrobeor/indiecovedocker
