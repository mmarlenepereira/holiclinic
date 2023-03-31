#!/usr/bin/env bash


sudo apt update && sudo apt install nodejs npm

# Install pm2 which is a production process manager for Node.js with a built-in load balancer.
sudo npm install -g pm2

# stop any instance of our application running currently
pm2 stop holiclinic

# change directory into folder where application is downloaded
cd holiclinic

# Install application dependancies
npm install

#echo $PRIVATE_KEY > privatekey.pem
#echo $SERVER > server.crt

# Start the application with the process name SimpleApplication2 using pm2
pm2 start ./bin/www --name holiclinic

# changes rep to private again
