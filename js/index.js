const header = document.getElementById("header");
const navigationDropdown = document.getElementById("navigationDropdown");
const drawerTogglerIcon = document.getElementById("drawerTogglerIcon");

// windows events
window.onload = function () {
  // Navigation Menu
  drawerTogglerIcon.addEventListener("click", () => {
    toggleDrawer();
  });
  // Dropdown
  const dropdowns = document.querySelectorAll(".dropdown");
  if (dropdowns === null) {
    return;
  }
  dropdowns.forEach((dropdown) => {
    const dropdown_header =
      dropdown.getElementsByClassName("dropdown__header")[0];
    if (dropdown_header === null) {
      return;
    }
    dropdown_header.addEventListener("click", (e) => {
      dropdown.classList.toggle("expanded");
    });
  });
};

// navigation menu handlers
function toggleDrawer() {
  header.classList.toggle("expanded-nav-menu");
  navigationDropdown.classList.toggle("open");
  drawerTogglerIcon.classList.toggle("bx-x");
}
