// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return null;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    return '[' + obj.map(function(value) {
      return stringifyJSON(value);
    }) + ']';
  }

  var result = "";
  var count = Object.keys(obj).length;
  for (var k in obj) {
    if (typeof obj[k] === 'function' || typeof obj[k] === 'undefined') {
      count--;
    } else if (count > 1) {
      result += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
      count--;
    } else {
      result += stringifyJSON(k) + ':' + stringifyJSON(obj[k]);
    }
  }
  return '{' + result + '}';
};
