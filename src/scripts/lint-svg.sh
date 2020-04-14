#!/bin/bash
npx svgo -f $APP/src/assets/icons \
  --pretty --indent=2 --enable=removeTitle --disable=removeViewBox
