const button = document.getElementById('hamburger-menu');
const title = document.getElementsByClassName('title');
const text = document.getElementsByClassName('text');
const language = document.getElementById('language');


button.classList.toggle('active');

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('inactive');
    document.getElementById('menu').classList.toggle('active');
    if (button.classList.contains('active')) {
        button.innerText = 'Close';
        button.classList.remove('active');
    } else {
        button.innerText = 'Projets ☰';
        button.classList.add('active');
}});



const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

  

document.getElementById('language').addEventListener('change', () => {
  console.log(document.getElementById('language').value);
  if (document.getElementById('language').value == 'fr') {
    
    Array.from(document.getElementsByClassName('title')).forEach((element) => {
      element.innerHTML = 'Bonjour!';
    });
  } else {
    Array.from(document.getElementsByClassName('title')).forEach((element) => {
      element.innerHTML = 'Hello!';
    });
  }
});