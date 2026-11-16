let count = 0;

document.getElementById('btn').addEventListener('click', () => {
  count++;
  document.getElementById('count').textContent = count;
});

document.getElementById('time').textContent =
  'Page loaded at ' + new Date().toLocaleTimeString();