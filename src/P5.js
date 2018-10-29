const p5 = require('p5');

exports.p5Impl = function(f) {
  return function() {
    new p5(function(p) {
      f(p)();
    });
  }
};

exports.setupImpl = function(p) {
  return function(eff) {
    return function() {
      p.setup = eff;
    };
  }
};

exports.drawImpl = function(p) {
  return function(eff) {
    return function() {
      p.draw = eff;
    };
  };
};

exports.createCanvasImpl = function(p) {
  return function(w) {
    return function(h) {
      return function() {
        p.createCanvas(w, h);
      };
    };
  };
};

exports.backgroundImpl = function(p) {
  return function(str) {
    return function() {
      p.background(str);
    };
  }
};
