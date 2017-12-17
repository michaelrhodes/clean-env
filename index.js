#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var clean = require('./cleaner')

var env = (function () {
  var env = path.join(process.cwd(), '.env')
  if (!fs.existsSync(env)) return
  if (!fs.statSync(env).isFile()) return
  return fs.readFileSync(env, 'utf8')
})()

clean(env)
