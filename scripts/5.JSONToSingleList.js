export default () => {
  function Knot(value) {
    this.value = value;
    this.next = null;
  }
  // Функция Knot описывает один узел списка
  
  function jsonToLinkedList(json) {
    const data = JSON.parse(json);
    const head = new Knot(data[0].value);
    let current = head;
  
    for (let i = 1; i < data.length; i++) {
      const newKnot = new Knot(data[i].value);
      current.next = newKnot;
      current = newKnot;
    }
  
    return head;
  }
  
  const json = '[{"value": 1}, {"value": 2}, {"value": 3}]';
  const linkedList = jsonToLinkedList(json);
  
}