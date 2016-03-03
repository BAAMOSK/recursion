// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  node = node || document.body;
  var result = [];

  if (node.nodeType === 1) {
    if (Array.prototype.indexOf.call(node.classList, className) !== -1) {
      result.push(node);
    }
  }
  node = node.firstChild;
  while(node) {
    result = result.concat(getElementsByClassName(className, node));
    node = node.nextSibling;
  }
  return result;
};
