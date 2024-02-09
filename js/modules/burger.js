
export const useBurger = (burger) => {
  const toggleMenu = () => {
    const header = document.querySelector(".header");
    const headerHeight = window.getComputedStyle(header).height;
    const menu = document.querySelector(".header_menu");
    menu.classList.toggle("show");
    menu.style.paddingTop = headerHeight;
  };

  burger.addEventListener("click", toggleMenu);
};
