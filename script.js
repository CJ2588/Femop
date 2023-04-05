// code for products drop down menu

const click = document.querySelectorAll(".click");
const list = document.querySelectorAll(".dropdown-list");


for (let number = 0; number<=click.length-1; number++) {
    click[number].addEventListener("click",()=>{
        list[number].classList.toggle("newlist");
    });
}
