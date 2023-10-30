export default (string) => {
  /* Создаём переменную, в неё положим заданную строку, уберём все пробелы и развернём.
  Затем в исходной строке уберём все пробелы и проверим, совпадают ли наши переменные.
  Если совпадают, возвращаем true, иначе - false
  */
  const reversed = string.replaceAll(' ', '').split('').reverse().join('')
  const srcStringNoSpacing = string.replaceAll(' ', '')

  return reversed === srcStringNoSpacing
}