const moreBtn = document.querySelector('.info .titleAndBtn .moreBtn');
const title = document.querySelector('.info .titleAndBtn .title');

moreBtn.addEventListener('click', () => {
    title.classList.toggle('clamp');
    moreBtn.classList.toggle('clicked');
});