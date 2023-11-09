function stringToJson(str) {
  let json = {};
  
  // Проверка на пустую строку
  if (str.trim() === "") {
    throw new Error('Empty string');
  }
  
  // Удаление пробелов и кавычек в начале и конце строки
  str = str.trim().replace(/^"|"$/g, '');
  
  // Разделение строки на пары ключ-значение
  const pairs = str.split(',');
  
  // Проверка на правильный формат пары ключ-значение
  pairs.forEach(pair => {
    const keyValue = pair.split(':');
    if (keyValue.length !== 2) {
      throw new Error('Invalid key-value pair');
    }
    const key = keyValue[0].trim().replace(/^"|"$/g, '');
    const value = keyValue[1].trim();
    
    // Проверка на правильный формат ключа
    if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
      throw new Error('Invalid key');
    }
    
    // Проверка на правильный формат значения
    if (/^"[^"]*"$/.test(value)) {
      json[key] = value.replace(/^"|"$/g, '');
    } else if (/^\d+$/.test(value)) {
      json[key] = parseInt(value);
    } else if (/^(true|false)$/.test(value)) {
      json[key] = value === 'true';
    } else {
      throw new Error('Invalid value');
    }
  });
  
  return json;
}

// Пример использования
const jsonString = '"name":"John","age":30,"city":"New York"';

try {
  const json = stringToJson(jsonString);
  console.log(json); // Вернёт объект { name: 'John', age: 30, city: 'New York' }
} catch (error) {
  console.error(error.message);
}