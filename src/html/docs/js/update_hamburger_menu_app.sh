#!/bin/sh
APP_NAME="hamburger_menu_app"
echo "Update ZIP for Application: $APP_NAME"
echo "---------------------------"
wget https://github.com/niebert/${APP_NAME}/archive/master.zip  -O ./zip/${APP_NAME}-master.zip
cd ./zip
rm ${APP_NAME}.zip
### Operations in directory "zip/"
unzip ${APP_NAME}-master.zip
mv ${APP_NAME}-master ${APP_NAME}

zip -r ${APP_NAME}.zip ${APP_NAME}
echo "Remove MacOSX injected files - if compressed on a MacOSX"
zip -d ${APP_NAME}.zip __MACOSX/\*
#zip -d jsoneditor_app.zip \*.DS_Store

echo "Remove uncompressed app folder '${APP_NAME}/'"
rm -R ${APP_NAME}
echo "Remove ${APP_NAME}-master.zip file!"
rm ${APP_NAME}-master.zip
echo "Update '${APP_NAME}' DONE"
echo "--------------------------------------------"
