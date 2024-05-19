document.addEventListener("DOMContentLoaded", function () {
  var menuBar = document.querySelector("#menu_bar");
  var nav_links = document.querySelector(".nav_links");
  nav_links.style.top = "-450px";

  menuBar.onclick = function () {
    if (nav_links.style.top === "-450px") {
      nav_links.style.top = "50px";
    } else {
      nav_links.style.top = "-450px";
    }
  };
});
