import '../styles/main.css';
document.addEventListener('DOMContentLoaded', () =>
  localStorage.getItem('theme') === 'dark' ? darkMode() : lightMode()
);

const upBtn = document.querySelector('.arrow-go-home');

document.addEventListener('scroll', () => {
  window.pageYOffset > 100
    ? upBtn.classList.add('show')
    : upBtn.classList.remove('show');
});
const propertiesWrapper = document.querySelector('.changed-content__wrapper');
const myPersonProperties = ['commited', 'proactive', 'passionate'];
const properties = [];
myPersonProperties.forEach((item) => {
  const property = document.createElement('span');
  property.style.display = 'block';
  property.style.marginRight = '25px';
  property.textContent = item;
  propertiesWrapper.appendChild(property);
  properties.push(property);
});
const changedContent = document.querySelector('.changed-content__title');
let personIndex = 0;

setInterval(() => {
  personIndex = personIndex < myPersonProperties.length ? personIndex : 0;

  properties.forEach((property) => {
    property.style.transform = `translateY(${-38 * personIndex}px)`;
  });
  personIndex++;
}, 1500);

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = '';
        }
      );
    } // End if
  });
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');

document.addEventListener('DOMContentLoaded', () =>
  localStorage.getItem('theme') === 'dark' ? darkMode() : lightMode()
);

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(e) {
  if (e.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
}

function darkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleIcon.children[0].className = 'fas fa-moon';
  localStorage.setItem('theme', 'dark');
  toggleSwitch.checked = true;
}
function lightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  toggleIcon.children[0].className = 'fas fa-sun';
  localStorage.setItem('theme', 'light');
}
const navMenu = document.querySelector('.nav');
const menuToggler = document.querySelector('.nav__toggler');
const navLink = document.querySelectorAll('.nav__link');

menuToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle('active');
  navLink.forEach((link, index) => {
    link.addEventListener('click', toggleMenu);
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
}
