#!/bin/bash

#rm -rf ios/build/Build/*
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/metro* && rm -rf $TMPDIR/haste-*
rm -rf node_modules
yarn install
