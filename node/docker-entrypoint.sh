echo "Entrypoint script for node"
dockerize -wait tcp://db:3306 -timeout 20s
node index.js
