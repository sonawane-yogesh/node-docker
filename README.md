Start MongoDB instance with network in separate container using network and connect to it:

``docker run -d --network mongo-network --name some-mongo -e MONGO_INITDB_ROOT_USERNAME=yogeshs -e MONGO_INITDB_ROOT_PASSWORD=yogeshs mongo``

``docker run -it --rm --network mongo-network mongo mongosh --host some-mongo -u yogeshs -p yogeshs --authenticationDatabase admin some-db``

Connection string format will become:
``mongodb://yogeshs:yogeshs@some-mongo:27017/notes``

Start separate container to connect to MongoDB:
``docker run --network=mongo-network -e CONNECTION_STRING=mongodb://yogeshs:yogeshs@some-mongo:27017/ -p 8000:8000 -p 9229:9229 --name node-docker node-docker:latest``