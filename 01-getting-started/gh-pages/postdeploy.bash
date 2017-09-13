#!/bin/bash

# replace base-path with root:
# /webcomponents-examples/ -> /

if ! [ -z "$1" ]; then
  sed -i -e "s/\<head\>\<base\ href=\"\/webcomponents-examples\/\"\/>/\<head\>/g" $1
  sed -i -e "s/\(href=\"\/webcomponents-examples\/\)/href=\"\//g" $1
  sed -i -e "s/\(src=\"\/webcomponents-examples\/\)/src=\"\//g" $1
  rm -rf .nojekyll 404.html index.html-e
fi
