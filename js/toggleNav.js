const MOBILE_BREAKPOINT = 768;

export function toggleNav() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu-mobile");
  const overflow = document.getElementById("menu-overflow");

  function resetMenu() {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
    overflow.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");

    menuToggle.textContent = "MENU";
  }

  function open() {
    const isOpen = menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    overflow.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);

    menuToggle.textContent = isOpen ? "Close" : "MENU";
  }

  menuToggle.addEventListener("click", open);
  overflow.addEventListener("click", resetMenu);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > MOBILE_BREAKPOINT) resetMenu();
    }, 150);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", resetMenu);
  });
}
