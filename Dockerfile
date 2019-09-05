FROM centos:latest
MAINTAINER NewstarCorporation
RUN yum -y install httpd
RUN systemctl start httpd
EXPOSE 80
