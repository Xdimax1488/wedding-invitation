const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const wedding = new Date('Nov 19 2022 13:00:00');

const daysVal = document.querySelector('.time-count__days .time-count__val ');
const hoursVal = document.querySelector('.time-count__houers .time-count__val ');
const minutesVal = document.querySelector('.time-count__minutes .time-count__val ');
const secondsVal = document.querySelector('.time-count__seconds .time-count__val ');

const daysText = document.querySelector('.time-count__days .time-count__text ');
const hoursText = document.querySelector('.time-count__houers .time-count__text ');
const minutesText = document.querySelector('.time-count__minutes .time-count__text ');
const secondsText = document.querySelector('.time-count__seconds .time-count__text ');
const animItems = document.querySelectorAll('._anim-items');

//timer
function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

const timeCount = () => {
  let now = new Date();
  let leftUntil = wedding - now;

  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
  let seconds = Math.floor(leftUntil / 1000) % 60;

  daysVal.textContent = days;
  hoursVal.textContent = hours;
  minutesVal.textContent = minutes;
  secondsVal.textContent = seconds;

  daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
  hoursText.textContent = declOfNum(hours, ['час', 'часа', 'чвсов']);
  minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
  secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
};
timeCount();
setInterval(timeCount, 1000);

//burger menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//animItems

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnscroll);
    function animOnscroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
  
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - animItemHeight / animStart;
        }
        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  
  setTimeout(() => {
    animOnscroll();
  }, 300);
  
