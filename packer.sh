#!/bin/bash

TARGET_BROWSER=$1
[ -z $TARGET_BROWSER ] && echo "Usage: ./packer.sh [chrome|firefox]" && exit 1

cp $TARGET_BROWSER.manifest.json manifest.json
zip -r $TARGET_BROWSER.owl.zip build/ assets/icons/exported/ assets/other/ dll/ popup.html options.html manifest.json
rm -rf ./demo-$TARGET_BROWSER
mkdir -p demo-$TARGET_BROWSER
cp $TARGET_BROWSER.owl.zip ./demo-$TARGET_BROWSER
cd ./demo-$TARGET_BROWSER
unzip *
cd ..
echo "Files packed to $TARGET_BROWSER.owl.zip.  Verify the build in ./demo-$TARGET_BROWSER"