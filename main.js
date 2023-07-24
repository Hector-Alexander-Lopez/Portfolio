//Runs function on window scroll (translucent to color)
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 50
  ) {
    navbar.className =
      " navigation-bar" + " animate-top" + " navbar-scroll-style";
  } else {
    navbar.className = navbar.className.replace(" navbar-scroll-style");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  const x = document.getElementById("navDemo");
  if (x.className.indexOf("mobile-drop-menu") == -1) {
    x.className += "mobile-drop-menu";
  } else {
    x.className = x.className.replace("mobile-drop-menu", "");
  }
}
