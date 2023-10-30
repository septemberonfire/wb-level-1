export default {
  /*
  Создадим две переменные - два первых числа ряда Фибоначчи. Затем с помощью цикла создадим третью переменную, которая будет равна сумме первой и второй.
  Затем сделаем переприсваивание значений и возвращаем переменную, значение которой мы присвоили сумму
  */
  fibItem(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  },

  fibAll(n) {
    /*
    Всё тоже самое, только создаём массив в который будем добавлять числа и возвращаем массив
    */
    let a = 1;
    let b = 1;
    let fibArray = [a, b];
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      fibArray.push(c);
      a = b;
      b = c;
    }
    return fibArray;
  },

  primeItem(num) {
    // В зависимости от условия возвращаем true или false
    let res = true;
    for (let j = 2; j < num; j++) {
      // бежим по числам до исходного
      if (num % j === 0) {
        res = false;
      }
    }
    return res;
  },

  primeAll(n) {
    // На основе предыдущего метода добавляем число в массив если оно соответствует условию
    let primeArray = []
    for (let i = 2; i <= n; i++) {
      // бежим по исходному числу в диапазоне
      if (this.primeItem(i)) {
        primeArray.push(i)
      }
    }
    return primeArray
  },
};
