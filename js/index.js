const navigationDrawer = document.getElementById("navigationDrawer");
const drawerTogglerIcon = document.getElementById("drawerTogglerIcon");
const mobileBodyOverly = document.getElementById("mobile-body-overly");

window.onload = function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  if (dropdowns === undefined || dropdowns === null) {
    return;
  }
  dropdowns.forEach((dropdown) => {
    const dropdown_header =
      dropdown.getElementsByClassName("dropdown__header")[0];
    if (dropdown_header === undefined || dropdown_header === null) {
      return;
    }
    dropdown_header.addEventListener("click", (e) => {
      dropdown.classList.toggle("expanded");
    });
  });
};

function toggleDrawer() {
  navigationDrawer.classList.toggle("open");
  drawerTogglerIcon.classList.toggle("bx-x");
  mobileBodyOverly.classList.toggle("show");
}
