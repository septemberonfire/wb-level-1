  export function jsonToString(json) {
    if (typeof json !== 'object' || json === null) {
      // Если json не является объектом или равен null, возвращаем его как строку
      return String(json);
    } else if (Array.isArray(json)) {
      // Если json является массивом, обрабатываем каждый элемент рекурсивно
      const elements = json.map(element => jsonToString(element));
      return `[${elements.join(',')}]`;
    } else {
      // Если json является объектом, обрабатываем каждое свойство рекурсивно
      const properties = Object.keys(json).map(key => `"${key}":${jsonToString(json[key])}`);
      return `{${properties.join(',')}}`;
    }
  }

