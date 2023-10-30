export default (number, variations) => {
  /*
  Args:
    - n: число.
    - forms: кортеж из трех форм слова в порядке:
        1. Именительный падеж единственного числа.
        2. Родительный падеж единственного числа.
        3. Родительный падеж множественного числа.
        
    Returns:
    Слово в правильной форме.
  */
  const n = number % 10;
  // n - последняя цифра введённого числа
  if (number > 10 && number < 20) return number + ' ' + variations[2];
  if (n > 1 && n < 5) return number + ' ' + variations[1];
  if (n == 1) return number + ' ' + variations[0];
  return number + ' ' + variations[2];
};
