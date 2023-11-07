function getCallStackSize() {
  let count = 0;

  try {
    function recursiveFunction() {
      count++;
      recursiveFunction();
    }

    recursiveFunction();
  } catch (error) {
    console.log('Размер коллстэка: ' + count + ' вызовов');
  }
}

/*
Вычисляю данную функцию в 3 разных браузерах: Google, Opera и Mozilla Firefox.

Результат в Google: 12 524 вызовов.
Результат в Opera: 13 921 вызовов.
Результат в Mozilla Firefox: 34 220 вызовов.

Проверить размер коллстэка в Safari нет возможности.
*/