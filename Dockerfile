FROM ubuntu:18.04

apt-get update

apt-get install apache2

service apache2 start

service apache2 enable

EXPOSE 80
