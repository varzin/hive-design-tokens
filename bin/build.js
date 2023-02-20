#!/usr/bin/env node

const {execSync} = require('child_process');
const tokens = require('../tokens.json');

const themes = Object.entries(tokens)
  .filter(([key]) => key.startsWith('$') || key === 'BaseTheme' ? false : true)
  .map(([key]) => key);


execSync(`git rm -r --cached --ignore-unmatch ./Themes`, {stdio: 'inherit'});
execSync(`mkdir ./Themes`, {stdio: 'inherit'})
themes.forEach((name) => {
  execSync(`npx @sinchsmb/mktheme@latest -f tokens.json -t '${name}' ./Themes/'${name}.json'`, {stdio: 'inherit'});
  console.log('---');
});
execSync('git add ./Themes/', {stdio: 'inherit'});
