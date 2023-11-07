export default () => {
  
  function addAnimation(element) {
    element.style.height = '100px'
    element.style.width = '100px'
    element.style.backgroundColor = 'red'
    element.style.transition = 'all 1s';
    element.style.transform = 'translateX(0px)';
    
    // Запуск анимации: в функции прописываем перемещение элемента по оси Х
    setTimeout(function() {
      element.style.transform = 'translateX(200px)';
    }, 100);
  }

const element = document.getElementById('myElement');
addAnimation(element);
}