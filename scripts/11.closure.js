export default () => {

  function parentFunction() {
    const message = 'Hi! I am variable of parent function';
    
    function childFunction() {
      console.log(message);
    }
    
    return childFunction;
  }
  
  const showMessage = parentFunction();
  showMessage()
}