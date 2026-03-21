(function () {
  const navButton = document.querySelector(".nav-btn");
  const navList = document.querySelector(".nav-list");

  if (!navButton || !navList) {
    return;
  }

  const closeMenu = () => {
    navButton.classList.remove("is-on");
    navButton.setAttribute("aria-expanded", "false");
    navList.hidden = true;
  };

  const openMenu = () => {
    navButton.classList.add("is-on");
    navButton.setAttribute("aria-expanded", "true");
    navList.hidden = false;
  };

  navButton.addEventListener("click", () => {
    const isOpen = navButton.classList.contains("is-on");
    if (isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  });

  navButton.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      navButton.focus();
    }
  });

  navList.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      navButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navButton.classList.contains("is-on")) {
      return;
    }
    if (event.target instanceof Node && navButton.closest(".nav").contains(event.target)) {
      return;
    }
    closeMenu();
  });
})();
