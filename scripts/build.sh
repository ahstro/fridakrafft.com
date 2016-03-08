#!/bin/bash

echo -n "Doing PostCSS stuff..."
postcss --use postcss-cssnext --local-plugins -o lib/style.css src/style.css
echo "done"

echo -n "Doing Babel stuff....."
babel src/script.js -o lib/script.js --presets es2015 --no-babelrc --minified
echo "done"
