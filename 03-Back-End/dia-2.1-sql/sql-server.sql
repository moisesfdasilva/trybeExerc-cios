PARA INICIAR O MYSQL-SERVER:
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7
