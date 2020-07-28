const tree = {
  value: 5,
  left: null,
  right: {
    value: 8,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 11,
      left: null,
      right: null,
    }
  }
}

// non resursive

const iterativeSumElements = function(tree) {
  let sumOfNodes = 0;
  let nodes = [ tree ];

  while (nodes.length > 0) {
    const node = nodes.pop();
    if (node !== null) {
      sumOfNodes += node.value;
    }
  }

  return sumOfNodes;
}

console.log(iterativeSumElements(tree));

// Recursive

const sumElements = tree =>
  tree === null ?
    0 :
    tree.value +
    sumElements(tree.left) +
    sumElements(tree.right);

console.log(sumElements(tree));
