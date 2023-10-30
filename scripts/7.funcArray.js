export default () => {
  const funcArr = [
    function() {
      return 1
    },
    function() {
      return 2
    },
    function() {
      return 3
    },
    function() {
      return 4
    },
    function() {
      return 5
    },
  ]

  for (let func of funcArr) {
    func()
  }
}