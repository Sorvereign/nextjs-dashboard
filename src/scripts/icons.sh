#!/bin/bash
npm run lint:svg
npx spritesh \
  --input ../assets/icons \
  --output ../public/icons.svg \
  --prefix icon-
