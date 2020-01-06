#!/usr/bin/env sh

# abort on errors
set -e

# clean old build
rm -rf makedocs/.vuepress/dist

# build
npm run docs:build

# navigate into the build output directory
cd makedocs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.soeren.codes' > CNAME

git add *
git stash
git checkout gh-pages
git stash apply stash
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -