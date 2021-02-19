const morebtn = document.querySelector(".info .titleAndBtn .moreBtn");
const title = document.querySelector(".info .titleAndBtn .title");

morebtn.addEventListener("click", () =>{
    morebtn.classList.toggle("clicked");
    title.classList.toggle("clamp")
});