export function addTemplateElement() {
  const template = document.createElement('template');

  template.innerHTML = '<p>Новый элемент в тэге template </p>';

  document.body.appendChild(template.content);
}
