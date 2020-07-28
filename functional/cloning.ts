const cloneArray = arr => [...arr];

const originalArray = ['hi', { on: true }];

const newArray = cloneArray(originalArray);

//

const target = { className: 'js-container ' };
const source = { tagName: 'div' }

const combinedObject = Object.assign({}, target, source);

//

const deepClone = o => JSON.parse(JSON.stringify(o));

const domNode = {
  className: 'class',
  tagName: 'div',
  childNodes: [{ text: 'hi' }]
}

const clonedNode = deepClone(domNode);
