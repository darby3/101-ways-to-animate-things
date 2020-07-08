#!/bin/bash

BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

TARGET_DIR=$1
COMPONENT=$2
NEW_COMPONENT=$3

echo -e "${BLUE}│${NC} creating a new ${YELLOW}$NEW_COMPONENT${NC} component in ${YELLOW}$TARGET_DIR${NC} based on ${YELLOW}$COMPONENT${NC}"

#mkdir -p ./components/$TARGET_DIR
#cp -r ./components/$TARGET_DIR/$COMPONENT/ ./components/$TARGET_DIR/$NEW_COMPONENT

mkdir -p ./components/$TARGET_DIR/$NEW_COMPONENT

cp ./components/$TARGET_DIR/$COMPONENT/$COMPONENT.config.yml ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.config.yml
cp ./components/$TARGET_DIR/$COMPONENT/$COMPONENT.js ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.js
cp ./components/$TARGET_DIR/$COMPONENT/$COMPONENT.hbs ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.hbs
cp ./components/$TARGET_DIR/$COMPONENT/$COMPONENT.scss ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.scss

sed -i -e "s/$COMPONENT/$NEW_COMPONENT/g" ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.js
sed -i -e "s/$COMPONENT/$NEW_COMPONENT/g" ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.hbs
sed -i -e "s/$COMPONENT/$NEW_COMPONENT/g" ./components/$TARGET_DIR/$NEW_COMPONENT/$NEW_COMPONENT.scss

rm ./components/$TARGET_DIR/$NEW_COMPONENT/*-e
