export function traverseDOM(element) {
  console.log('Тег элемента: ' + element.tagName);

  for (let i = 0; i < element.children.length; i++) {
    traverseDOM(element.children[i]);
  }
}