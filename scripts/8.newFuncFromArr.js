export default () => {
  function createClosure(arr) {
    return function() {
      const resultArray = [];
      for (let i = 0; i < arr.length; i++) {
        resultArray.push(arr[i]());
      }
      return resultArray;
    };
  }
  
  const arr = [
    function () {
      return 1;
    },
    function () {
      return 2;
    },
    function () {
      return 3;
    },
    function () {
      return 4;
    },
  ];

  const closure = createClosure(arr);
  return closure()
};
