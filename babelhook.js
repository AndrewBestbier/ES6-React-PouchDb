//taken from http://stackoverflow.com/questions/20049790/how-to-pass-compiler-options-to-mocha/28700064#28700064
// This file is required in mocha.opts
// The only purpose of this file is to ensure
// the babel transpiler is activated prior to any
// test code, and using the same babel options

require("babel/register")({
  stage: 1
});