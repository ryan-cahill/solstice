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

### API
#### /utilityData
_Methods Allowed_
`GET`

_Example Successful Response Value_
```json
{
    "body": {
        "utilityData": {
            "9edf8a9c-9156-4fd6-bfaa-d1bf0a43df1a": {
                "year": 2016,
                "month": 12,
                "kwh": "200",
                "bill": 144.04,
                "savings": 19.81,
                "milliseconds": 1480550400000
            },
            "b67186ee-46c4-4424-bb99-aa656388206e": {
                "year": 2017,
                "month": 1,
                "kwh": 750,
                "bill": 73.29,
                "savings": 3.49,
                "milliseconds": 1483228800000
            },
            "9cd65358-6322-44a4-ab64-8beda2c19dd4": {
                "year": 2017,
                "month": 2,
                "kwh": 500,
                "bill": 70.04,
                "savings": 1.32,
                "milliseconds": 1485907200000
            },
            "95ed99f0-7d6e-45a6-8a57-e9e38c3db603": {
                "year": 2017,
                "month": 3,
                "kwh": 730,
                "bill": 94.14,
                "savings": 2.99,
                "milliseconds": 1488326400000
            },
            "526cabc4-15c5-49db-b405-6cb2eca80796": {
                "year": 2017,
                "month": 4,
                "kwh": "20",
                "bill": "20",
                "savings": "20",
                "milliseconds": 1491004800000
            }
        }
    }
}
```

#### /utilityData/<billingItemUuid>
_Methods Allowed_
`GET`

_Parameters_
|Name            |Type|Required|Location|
|----------------|----|--------|--------|
|billingItemUuid |uid |yes     |URL     |

_Example Successful Response Value_
```json
{
    "body": {
        "utilityData": {
            "year": 2017,
            "month": 2,
            "kwh": 500,
            "bill": 70.04,
            "savings": 1.32,
            "milliseconds": 1485907200000
        }
    }
}
```

#### /updateUtilityData/<updatedDataUuid>
_Methods Allowed_
`PUT`

_Parameters_
|Name            |Type|Required|Location|
|----------------|----|--------|--------|
|updatedDataUuid |uid |yes     |URL     |

_Example Successful Response Value_
Returns `204`, no content.