const btn = document.querySelector('.button');
const blocks = document.getElementsByClassName('block');
blocks.forEach = [].forEach;

const blocksAction = () => {
  btn.disabled = true;
  if (btn.innerHTML === 'Показать') {
    blocks.forEach( item => item.style.height = '100%');
    setTimeout( () => {
      btn.innerHTML = 'Скрыть';
      btn.disabled = false
    }, 2000);
  } else {
    blocks.forEach( item => item.style.height = '0');
    setTimeout( () => {
      btn.innerHTML = 'Показать';
      btn.disabled = false
    }, 2000);
  }
};

btn.addEventListener('click', blocksAction);