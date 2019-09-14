#!/bin/sh
filename="loadfile4dom"
echo "COPY: $filename src/libs/${filename}.js"
#echo ../../LibrariesJS/$filename/docs/js/${filename}.js  src/libs/${filename}.js
cp ../../LibrariesJS/$filename/docs/js/${filename}.js  src/libs/${filename}.js
echo "COPY: $filename docs/js/${filename}.js"
cp ../../LibrariesJS/$filename/docs/js/${filename}.js  docs/js/${filename}.js
filename="src/codegen.js"
echo "COPY: $filename from Handlebars4Code"
cp ../../TemplateJS/Handlebars4Code/${filename}  ${filename}
filename="build.js"
echo "COPY: $filename from Handlebars4Code"
cp ../../TemplateJS/Handlebars4Code/${filename}  ${filename}
