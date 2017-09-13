#!/bin/bash

export REPLACEMENT=webcomponents-examples

# add base tag:
# <head> -> <head><base href="/$REPLACEMENT/"/>

if ! [ -z "$1" ]; then
  sed -i -e "s/\(src=\"\/\)/src=\"\/$REPLACEMENT\//g" $1
  sed -i -e "s/\(href=\"\/\)/href=\"\/$REPLACEMENT\//g" $1
  sed -i -e "s/\(<head>\)/<head><base href=\"\/$REPLACEMENT\/\"\/>/g" $1
fi
