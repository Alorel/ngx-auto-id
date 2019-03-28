const {join} = require('path');
const fs = require('fs');

const path = join(__dirname, 'dist', 'ngx-auto-id', 'package.json');

const json = JSON.parse(fs.readFileSync(path, 'utf8'));
delete json.dependencies;
json.types = json.typings;

const rootPkgJson = require('./package');
const syncedKeys = ['version', 'keywords', 'description', 'repository', 'license'];
for (const k of syncedKeys) {
  json[k] = rootPkgJson[k];
}

fs.writeFileSync(path, JSON.stringify(json, null, 2));
