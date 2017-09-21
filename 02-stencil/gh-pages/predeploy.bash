#!/bin/bash

export REPLACEMENT=webcomponents-examples

# add base tag:
# <head> -> <head><base href="/$REPLACEMENT/"/>

if ! [ -z "$1" ]; then
  sed -i -e "s/\(src=\"\/\)/src=\"\/$REPLACEMENT\//g" $1
  sed -i -e "s/\(href=\"\/\)/href=\"\/$REPLACEMENT\//g" $1
  sed -i -e "s/\(<head>\)/<head><base href=\"\/$REPLACEMENT\/\"\/>/g" $1
  sed -i -e "s/navigator\.serviceWorker\.register('\/sw\.js')/navigator\.serviceWorker\.register('\/$REPLACEMENT\/sw\.js')/g" $1
  sed -i -e "s/\/build\/app\//\/$REPLACEMENT\/build\/app\//g" $1
fi
