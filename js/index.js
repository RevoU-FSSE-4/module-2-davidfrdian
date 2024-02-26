const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const x = document.querySelector("#x");

// when click menu bar
document.querySelector("#menu").onclick = () => {
  navigation.classList.toggle("active");
  menu.classList.toggle("x");
};

// login button
document.querySelector("#showLogin").addEventListener("click", function () {
  document.querySelector(".popup-login").classList.add("active");
});

document
  .querySelector(".close-btn-login")
  .addEventListener("click", function () {
    document.querySelector(".popup-login").classList.remove("active");
  });

// for close popup login beyond the content
document.addEventListener("click", function (e) {
  if (
    !document.getElementById("showLogin").contains(e.target) &&
    !document.querySelector(".popup-login").contains(e.target)
  ) {
    document.querySelector(".popup-login").classList.remove("active");
  }
});

// sign up button
document.getElementById("showSignup").addEventListener("click", function () {
  document.querySelector(".popup-signup").classList.add("active");
});

document
  .querySelector(".close-btn-signup")
  .addEventListener("click", function () {
    document.querySelector(".popup-signup").classList.remove("active");
  });

// for close popup signup beyond the content
document.addEventListener("click", function (e) {
  if (
    !document.getElementById("showSignup").contains(e.target) &&
    !document.querySelector(".popup-signup").contains(e.target)
  ) {
    document.querySelector(".popup-signup").classList.remove("active");
  }
});
