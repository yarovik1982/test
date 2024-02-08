const burgerMenu = () => {
   console.log("work");
   const burger = document.querySelector('.header_burger')

   const toggleMenu = () => {
      const header = document.querySelector('.header')
      const headerHeight = window.getComputedStyle(header).height
      console.log(headerHeight);
      const menu = document.querySelector('.header_menu')
      menu.classList.toggle('show')
      menu.style.paddingTop = headerHeight
   }

   burger.addEventListener('click', toggleMenu)
   
   
}
burgerMenu()