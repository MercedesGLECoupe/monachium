console.log("Hello world!");



let changeBackground = document.querySelector(".changeBackground");
let container = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

changeBackground.addEventListener("click", () => {
    container.classList.toggle("anotherBackground");

    themeName.innerText = container.classList.contains("anotherBackground") ? "jasny" : "ciemny";
});



