# Projeto de estudo docker

## Tecnologias
- Mysql
- Nodejs
- PHP

# Roda do docker

`docker build -t mysql-image -f api/db/Dockerfile .`

`docker build -t node-image -f api/Dockerfile .`

`docker build -t php-image -f website/Dockerfile .`

`docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image`

`docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image`

`docker run -d -v $(pwd)/website:/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image`