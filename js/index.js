const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const x = document.querySelector("#x");

// when click menu bar
document.querySelector("#menu").onclick = () => {
    navigation.classList.toggle("active");
    menu.classList.toggle("x");
}

