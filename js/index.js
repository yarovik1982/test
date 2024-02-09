import { useBurger } from "./modules/burger.js";
import { toggleTypeInput } from "./modules/toggleTypeInput.js";
 
const burger = document.querySelector(".header_burger");
const checkboxes = document.querySelectorAll(".inpCheckTogglerPass");

useBurger(burger);
toggleTypeInput(checkboxes);


