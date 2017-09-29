#!/bin/bash

# add base tag:
# <head> -> <head><base href="/webcomponents-examples/"/>

if ! [ -z "$1" ]; then
  sed -i -e "s/\(src=\"\/\)/src=\"\/webcomponents-examples\//g" $1
  sed -i -e "s/\(href=\"\/\)/href=\"\/webcomponents-examples\//g" $1
  sed -i -e "s/\(<head>\)/<head><base href=\"\/webcomponents-examples\/\"\/>/g" $1
fi
