# purescript-p5

p5.js bindings for PureScript

*This project has just been started and so far only implements a handful of functions in the p5.js API*

I'm currently trying to generate the FFI from the p5.js YUIDoc.

Completed:
  * parse p5.js YUIDoc
  * generate FFI PureScript functions for basic p5.js types

TODO:
  * generate FFI for more complicated p5.js types (e.g. p5.Color, p5.Vector)
  * handle optional parameters
  * generate comments for FFI functions so that purescript-p5 documentation can be auto-generated by pulp
  * support functions with greater than 10 arguments
  * make generated PureScript function names more human readable
  * parse return types
