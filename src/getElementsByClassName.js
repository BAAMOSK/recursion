// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  node = node || document.body;
  var result = [];

  if (node.nodeType === 1) {
    for (var i = 0; i < node.classList.length; i++) {
      if (node.classList[i] === className) {
        result.push(node);
        break;
      }
    }
  }
  node = node.firstChild;
  while(node) {
    result = result.concat(getElementsByClassName(className, node));
    node = node.nextSibling;
  }
  return result;
};
