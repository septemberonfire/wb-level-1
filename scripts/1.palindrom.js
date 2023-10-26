export default (string) => {
  const reversed = string.replaceAll(' ', '').split('').reverse().join('')
  const srcStringNoSpacing = string.replaceAll(' ', '')

  return reversed === srcStringNoSpacing
}