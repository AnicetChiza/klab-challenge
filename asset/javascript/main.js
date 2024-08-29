const menu = document.querySelector('.menu-icon');
const exit = document.querySelector('.exit-icon');
const menuExit = document.querySelector('.exit');
const divMenu = document.querySelector('.menu');
const list = document.querySelector('.list ul');

divMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    menuExit.style.display = 'flex';
    list.classList.add('toogle');
});

exit.addEventListener('click', () => {
    menu.style.display = 'flex';
    menuExit.style.display = 'none';
    list.classList.add('toogle');
});