const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
    clickHandle();
    });

close.addEventListener("click", () => {
    clickHandleClose();
})

function clickHandle() {
    container.classList.add("show-nav");
}

function clickHandleClose() {
    container.classList.remove("show-nav");
}