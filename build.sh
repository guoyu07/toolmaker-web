#!/bin/bash

REGISTRY_HOST=registry.chcp.io
REGISTRY_PORT=30100
PRODUCT=toolmaker

buildImage()
{
  #Build a docker image
  echo "CHCP: build image: chcp/$PRODUCT/"$1:$2-$3
  docker build -t chcp/$PRODUCT/$1:$2-$3 ./ | grep -v 'Sending build context'

  #Use a docker registry to store the images
  echo -e
  echo "CHCP: push image: $REGISTRY_HOST:$REGISTRY_PORT/chcp/toolmaker/"$1:$2-$3
  docker tag chcp/$PRODUCT/$1:$2-$3 $REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-$3
  docker push $REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-$3

  #make dev/test/stage/prod latest image use BUILD_NUMBER image
  echo -e
  echo "CHCP: delete pre latest images: "$1:$2-latest
  docker rmi $REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-latest
  echo -e 
  echo "CHCP: push the latest images: "$1:$2-latest
  docker tag chcp/$PRODUCT/$1:$2-$3 $REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-latest
  docker push $REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-latest

  #Delete images before 3 images 
  let NEW_BUILD_NUMBER=$3-3
  echo -e
  echo "CHCP: delete pre imgaes: "$1:$2-$NEW_BUILD_NUMBER
  docker rmi chcp/$PRODUCT/$1:$2-$NEW_BUILD_NUMBER
  docker rmi $REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-$NEW_BUILD_NUMBER

  #Becareful [ -n $4 ] does not work.
  if [ -n "$4" ]; then
    #use rolling update pod. 
    echo -e
    echo "CHCP: rolling-update pod: "$1:$2-$3
    ssh chcp@$4 "kubectl rolling-update $1-rc --image=$REGISTRY_HOST:$REGISTRY_PORT/chcp/$PRODUCT/$1:$2-$3 --update-period=15s  --namespace=$PRODUCT-$2"   

    ##Use delete pod.
    #echo -e
    #echo "CHCP: delete pod: "$1:$2-$3
    #ssh chcp@$4 "kubectl get pod --namespace=$PRODUCT-$2 | grep $1 | awk '{print $1}' | xargs kubectl delete pod --namespace=$PRODUCT-$2"
  fi
}

#Main
#check input parameters
if [ $# -lt 3 ]; then
  echo "Usage: build-image.sh appname dev|test|stage|prod TAG|BUILD-NUMBER API-SERVER"
  exit 1
fi

#call build function
buildImage $1 $2 $3 $4
