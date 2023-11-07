export default () => {
  function analyzePassword(password) {
    let score = 0;

    // Проверяем длину пароля
    if (password.length >= 8) {
      score++;
    }

    // Проверяем есть ли цифры в пароле
    if (/\d/.test(password)) {
      score++;
    }

    // Проверка наличия букв в разных регистрах
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      score++;
    }

    // Проверка наличия специальных символов в пароле
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      score++;
    }

    // Вывод оценки сложности пароля
    switch (score) {
      case 0:
        console.log("Очень слабый пароль");
        break;
      case 1:
        console.log("Слабый пароль");
        break;
      case 2:
        console.log("Средний пароль");
        break;
      case 3:
        console.log("Сильный пароль");
        break;
      case 4:
        console.log("Очень сильный пароль");
        break;
      default:
        console.log("Неверный пароль");
        break;
    }
  }

  const password = prompt("Введите пароль");
  analyzePassword(password);
};
