# For testing purposes, we'll use docker postgresql 

## prerequisite
1. docker
2. if "volumes" direcotry in "db" directory does not exist then create one


## steps
1. in db directory
`$ docker run -d \
    --name {CONTAINER_NAME_YOU_WANT_TO_USE} \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD={MY_SECRET_PASS} \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v ${PWD}/volumes/pg-data:/var/lib/postgresql/data \
    postgres:9.6`


2. after it's done, next time you can just start and stop docker
$ docker start {CONTAINER_NAME_YOU_WANT_TO_USE}
$ docker stop {CONTAINER_NAME_YOU_WANT_TO_USE}

