#!/bin/bash

#---------------------Move all the .jar files from the seperate maven projects to the deploy-app directory

#---------------------Perform React build
cd /home/iorbitdev/projects/Fresh2Rely/ui/web/app
npm run build
cd build
echo "[UI Build ready for deployment....]"
ls -l # List the contets of the build folder to check if the files were built correctly.

#---------------------Move react build folder to the right directory

#---------------------Perform android build 

#---------------------To do: Move the the right directory and then run the following after correcting the paths.

# set -e

# AAPT="/path/to/android-sdk/build-tools/23.0.3/aapt"
# DX="/path/to/android-sdk/build-tools/23.0.3/dx"
# ZIPALIGN="/path/to/android-sdk/build-tools/23.0.3/zipalign"
# APKSIGNER="/path/to/android-sdk/build-tools/26.0.1/apksigner" # /!\ version 26
# PLATFORM="/path/to/android-sdk/platforms/android-19/android.jar"

# echo "Cleaning..."
# rm -rf obj/*
# rm -rf src/com/example/helloandroid/R.java

# echo "Generating R.java file..."
# $AAPT package -f -m -J src -M AndroidManifest.xml -S res -I $PLATFORM

# echo "Compiling..."
# javac -d obj -classpath src -bootclasspath $PLATFORM -source 1.7 -target 1.7 src/com/example/helloandroid/MainActivity.java
# javac -d obj -classpath src -bootclasspath $PLATFORM -source 1.7 -target 1.7 src/com/example/helloandroid/R.java

# echo "Translating in Dalvik bytecode..."
# $DX --dex --output=classes.dex obj

# echo "Making APK..."
# $AAPT package -f -m -F bin/hello.unaligned.apk -M AndroidManifest.xml -S res -I $PLATFORM
# $AAPT add bin/hello.unaligned.apk classes.dex

# echo "Aligning and signing APK..."
# $APKSIGNER sign --ks mykey.keystore bin/hello.unaligned.apk
# $ZIPALIGN -f 4 bin/hello.unaligned.apk bin/hello.apk

# if [ "$1" == "test" ]; then
# 	echo "Launching..."
# 	adb install -r bin/hello.apk
# 	adb shell am start -n com.example.helloandroid/.MainActivity
# fi

#---------------------Move the build apk to the correct directory

#---------------------Trigger the docker build and deploy
cd /home/iorbitdev/projects/Fresh2Rely/Docker
#ls -l
sudo docker-compose up

#---------------------End