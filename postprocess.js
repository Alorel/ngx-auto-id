const {join} = require('path');
const fs = require('fs');

const path = join(__dirname, 'dist', 'ngx-auto-id', 'package.json');

const json = JSON.parse(fs.readFileSync(path, 'utf8'));
delete json.dependencies;
json.types = json.typings;
json.version = require('./package.json').version;

fs.writeFileSync(path, JSON.stringify(json, null, 2));
