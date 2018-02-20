# solstice

### Installation
The front and back ends of solstice are Dockerized for convenience and standardization. The only dependency is [Docker](https://docs.docker.com/install/) itself.

### Building the Containers
The instructions below should be run from the root of the repository and will build runnable Docker images.

_frontend_
```sh
docker build -t solstice-frontend -f Dockerfile.frontend .
```
_api_
```sh
docker build -t solstice-api -f Dockerfile.api .
```

### Running the Containers
When built, the containers can be run by the commands below. In a browser, navigate to `localhost:5000` to interact with the application.

_frontend_
```sh
docker run -d -t -p 5000:5000 solstice-frontend
```
_api_
```sh
docker run -d -t -p 5001:5001 solstice-api
```