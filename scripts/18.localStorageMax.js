export const maxLocalStorageSize = () => {
  try {
const testKey = 'test';
let data = '';
// Создаем строку, которая будет примерно 1MB в размере
while (data.length < 1024 * 1024) {
  data += 'a';
}

localStorage.setItem(testKey, data);

let dataSize = data.length;
let sizeExceeded = false;

while (!sizeExceeded) {
  try {
    // Добавляем еще 1MB к данным
    data += data;
    dataSize += data.length;
    localStorage.setItem(testKey, data);
  } catch (e) {
    // Превышен максимальный размер localStorage
    sizeExceeded = true;
  }
}

// Возвращаем размер данных минус последний удачно сохраненный кусок
return dataSize - data.length;
  } catch (e) {
// localStorage не поддерживается
return 0;
  }
};
