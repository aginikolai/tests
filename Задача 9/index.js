const area = document.querySelector('.squads_area');
const randomNum = Math.floor(Math.random() * 90) + 10;
const colors = ['black', 'green', 'red', 'blue', 'yellow', 'pink', 'orange', 'gray'];

for( let i = 1; i <= randomNum; i++) {
  const randomColor = Math.floor(Math.random() * colors.length);
  const div = document.createElement('div');
  div.className = "squad";
  div.style.background = colors[randomColor];
  area.appendChild(div);
}