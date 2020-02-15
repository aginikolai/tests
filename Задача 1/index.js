let index = 0;
const slides = document.getElementsByClassName('slide');
slides.forEach = [].forEach;
const dots = document.getElementsByClassName('dot');
dots.forEach = [].forEach;

function sliderOnload () {
  slides.forEach( (item, i) => i === 0 ? item.style.display = 'block' : item.style.display = 'none');
  dots.forEach((item, i) => i === index ? item.style.opacity = '1' : item.style.opacity = '0.5')
}

function slideChanging (direction) {
  slides.forEach( (item, i) => {
    if (i === index) {
      item.style.display = 'block';
      item.classList.add(`slide_anim_${direction}`);
    } else {
      item.style.display = 'none';
      item.classList.remove(`slide_anim_${direction}`);
    }
  });
  dots.forEach((item, i) => i === index ? item.style.opacity = '1' : item.style.opacity = '0.5')
}

const right = document.querySelector('.slide_right');
right.addEventListener('click', () => {
  index + 1 === slides.length ? index = 0 : index += 1;
  slideChanging('right');
});

const left = document.querySelector('.slide_left');
left.addEventListener('click', () => {
  index === 0 ? index = slides.length - 1 : index -= 1;
  slideChanging('left');
});


document.addEventListener("DOMContentLoaded", sliderOnload);