#!/usr/bin/env bash
echo "# ng_products" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/eagle7410/ng_products.git
git push --set-upstream origin master
