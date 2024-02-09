const burgerMenu = () => {
  const burger = document.querySelector(".header_burger");

  const toggleMenu = () => {
    const header = document.querySelector(".header");
    const headerHeight = window.getComputedStyle(header).height;
    const menu = document.querySelector(".header_menu");
    menu.classList.toggle("show");
    menu.style.paddingTop = headerHeight;
  };

  burger.addEventListener("click", toggleMenu);
};
burgerMenu();

const toggleTypeInput = () => {
  const checkboxes = document.querySelectorAll('.inpCheckTogglerPass');
  if (!checkboxes || checkboxes.length === 0) {
    return;
  } else {
    console.log(checkboxes);
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function(e) {
        const parent = e.target.closest('.form_row');
        console.log(parent);
        const input = parent.querySelector('.form_input');
        console.log(input);
        if (e.target.checked) {
          input.setAttribute('type', 'text');
        } else {
          input.setAttribute('type', 'password');
        }
      });
    });
  }
}
toggleTypeInput();



