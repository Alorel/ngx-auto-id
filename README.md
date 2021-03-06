# ngx-auto-id

Automatic ID generator for Angular

[![Build Status](https://travis-ci.com/Alorel/ngx-auto-id.svg?branch=2.0.0)](https://travis-ci.com/Alorel/ngx-auto-id)
[![Coverage Status](https://coveralls.io/repos/github/Alorel/ngx-auto-id/badge.svg?branch=2.0.0)](https://coveralls.io/github/Alorel/ngx-auto-id?branch=2.0.0)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alorel/ngx-auto-id.svg)](https://greenkeeper.io/)

-----

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
  - [Automatically setting the default ID](#automatically-setting-the-default-id)
  - [Controlling the ID prefix](#controlling-the-id-prefix)
    - [Setting the default ID prefix](#setting-the-default-id-prefix)
  - [Generating an ID without setting it](#generating-an-id-without-setting-it)
  - [Typical usage within forms](#typical-usage-within-forms)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```bash
npm install @aloreljs/ngx-auto-id@^2.0.0 # for Angular 8
npm install @aloreljs/ngx-auto-id@^1.0.0 # for Angular 7
```

# Usage

In whatever module you want to use the directive in:

```typescript
import {NgxAutoIdModule} from '@aloreljs/ngx-auto-id';

@NgModule({
  imports: [NgxAutoIdModule]
})
export class MyFancyModule {}
```

## Automatically setting the default ID

```html
<div ngx-auto-id></div>
<div ngx-auto-id></div>
```

Outputs:

```html
<div id="el-1"></div>
<div id="el-2"></div>
```

## Controlling the ID prefix

```html
<div ngx-auto-id></div>
<div ngx-auto-id id-prefix="fancy-"></div>
```

Outputs:

```html
<div id="el-3"></div>
<div id="fancy-1"></div>
```

### Setting the default ID prefix

You might want to replace the default "el-" prefix with your own; in this case, you should provide a value for
the NGX_AUTO_ID_DEFAULT_PREFIX token:

```typescript
import {NgModule} from '@angular/core';
import {NGX_AUTO_ID_DEFAULT_PREFIX} from '@aloreljs/ngx-auto-id';

@NgModule({
  //... declarations etc
  providers: [{
    provide: NGX_AUTO_ID_DEFAULT_PREFIX,
    useValue: 'my-prefix-'
  }]
})
export class AppModule {
  
}
```

## Generating an ID without setting it

```html
<div [ngx-auto-id]="false" #autoID="ngx-auto-id"></div> <!-- Must be strictly false, not falsy -->
<div [id]="autoID.toString()"></div>
<div [id]="autoID"></div> <!-- The .toString() method returns the ID -->
```

Outputs:

```html
<div></div>
<div id="el-4"></div>
<div id="el-4"></div>
```

## Typical usage within forms

```html
<label [for]="idUsername">Username:</label>
<input ngx-auto-id #idUsername="ngx-auto-id"/>
```
