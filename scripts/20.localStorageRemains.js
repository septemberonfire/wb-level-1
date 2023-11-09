import { maxLocalStorageSize } from "./18.localStorageMax.js"

export default () => {
  const maxLength = maxLocalStorageSize()
  const currentLength = localStorage.getItem('posts').length
  console.log(currentLength);
  console.log(`Максимально доступное пространство: ${maxLength} байт. Занято: ${currentLength} байт`);
  
}