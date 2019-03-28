#!/usr/bin/env bash

bash -c 'cd dist/ngx-auto-id && npm pack';
cp dist/ngx-auto-id/*.tgz dist.tgz
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
