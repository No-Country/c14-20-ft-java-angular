FROM openjdk:17-alpine
MAINTAINER noC
VOLUME /tmp
COPY target/api-0.0.1-SNAPSHOT.jar  api-app.jar
ENTRYPOINT ["java","-jar","/api-app.jar"]
