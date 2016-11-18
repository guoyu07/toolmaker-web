FROM nginx:1.10.1-alpine
MAINTAINER Gordon Wang "wxnchcp_cn@sina.com"

#Timezone does not work for Alpine,so copy zoneinfo to Alpine.
RUN mkdir -p /usr/share/zoneinfo
COPY ./zoneinfo /usr/share/zoneinfo

ENV TIME_ZONE=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TIME_ZONE /etc/localtime && echo $TIME_ZONE > /etc/timezone

#To collect nginx log file, so unlink the /dev/stdout that linked in image nginx:1.10.1-alpine  
RUN unlink /dev/stdout && unlink /dev/stderr  

#Application setttings
ENV APP_HOME /opt/chcp/toolmaker
RUN mkdir -p $APP_HOME $APP_HOME/static

#Copy nginx config file
COPY ./toolmaker.conf /etc/nginx/conf.d/

#Copy web static file
#COPY ./dist $DCMS_HOME/static
