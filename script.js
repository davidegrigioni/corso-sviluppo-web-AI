const button = document.getElementById('saluta');
const input = document.getElementById('name');
const greeting = document.getElementById('greeting');

button.addEventListener('click', () => {
  const nome = input.value.trim() || 'amico';
  greeting.textContent = `Ciao, ${nome}!`;
});
