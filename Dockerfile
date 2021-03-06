FROM chcp/kube-system/nginx:1.10.1-alpine-e8t
MAINTAINER Gordon Wang "wxnchcp_cn@sina.com"

#Application setttings
ENV APP_HOME /opt/chcp/toolmaker
RUN mkdir -p $APP_HOME $APP_HOME/static

#Copy nginx config file
COPY ./web.conf /etc/nginx/conf.d/

#Copy web static file
COPY ./dist $APP_HOME/static
