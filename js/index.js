const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const x = document.querySelector("#x");

// when click menu bar
document.querySelector("#menu").onclick = () => {
    navigation.classList.toggle("active");
    menu.classList.toggle("x");
}


// login button
document.querySelector("#showLogin").addEventListener("click", function(){
    document.querySelector(".popup-login").classList.add("active");
});

document.querySelector(".close-btn-login").addEventListener("click", function(){
    document.querySelector(".popup-login").classList.remove("active");
})