#!/bin/bash

echo "Starting PostCSS"
postcss --use postcss-cssnext --local-plugins -o lib/style.css src/style.css --watch &

echo "Starting Babel"
babel src/script.js -o lib/script.js --presets es2015 --no-babelrc --minified --watch &

echo "Starting http-server"
http-server
