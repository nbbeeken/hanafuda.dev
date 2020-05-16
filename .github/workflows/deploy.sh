#!/usr/bin/env sh

set -e

git fetch --all
git checkout master
git pull

git branch -D gh-pages
git checkout --orphan gh-pages

npm run build

FILES=$(ls dist)
mv dist/* .
git add $FILES

git status || true

git commit -m "chore: update site"
git push --force -u origin gh-pages

git checkout -f master
git gc
