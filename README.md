# spring-cloud-sample
Deploy Spring Cloud to IBM Bluemix

Thanks Ryan for the great and clear posts.
http://ryanjbaxter.com/2015/09/14/building-cloud-native-apps-with-spring-part-1/?cm_mc_uid=14329562654414474515937&cm_mc_sid_50200000=1447976441
The tutorial not only teaches me the steps to deploy spring cloud on Bluemix, but also gives me some great points about microservice design.

P.S. Here is my Build & Deploy bash
```
#!/bin/bash
export JAVA_HOME=~/java8
mvn -B package
```

```
#!/bin/bash
cf push "${CF_APP}" -p ocr-hystrix-dashboard-0.0.1-SNAPSHOT.jar -n sjsu-ocr-hystrix-dashboard -m 512M --no-start
cf set-env "${CF_APP}" SPRING_PROFILES_ACTIVE cloud
cf bind-service "${CF_APP}" ocr-eureka
cf start "${CF_APP}"
```
