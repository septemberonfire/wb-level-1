export function drawForm() {

  const form = document.createElement("form");
  const label1 = document.createElement("label");
  const input1 = document.createElement("input");
  const label2 = document.createElement("label");
  const input2 = document.createElement("input");
  const button = document.createElement("button");

  input1.type = "text";
  input1.required = true;
  input2.type = "text";
  input2.required = true;
  button.type = "submit";
  button.textContent = "Отправить";
  form.style.display = 'flex'
  form.style.flexDirection = 'column'
  form.style.gap = '16px'
  form.style.width = '50%'

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(button);
  document.body.appendChild(form);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value1 = input1.value;
    const value2 = input2.value;

    // Отображение данных во всплывающем окне
    alert(`Значение 1: ${value1}\nЗначение 2: ${value2}`);
  });
}
