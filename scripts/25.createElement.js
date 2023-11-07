export default () => {
  const newElement = document.createElement('div');

  newElement.style.backgroundColor = 'blue';
  newElement.style.width = '100px';
  newElement.style.height = '100px';

  document.body.appendChild(newElement);
}
