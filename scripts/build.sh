#!/bin/bash

echo -e  "\e[1m\e[92mBuilding Release...\e[0m";

# Execute gradlew assembleRelease
cd android && ./gradlew assembleRelease --daemon

echo -e "\e[1m\e[92mDone Building\e[0m";