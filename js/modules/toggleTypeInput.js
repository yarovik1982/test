
export const toggleTypeInput = (list) => {
   if (!list || list.length === 0) {
     return;
   } else {
     list.forEach((checkbox) => {
       checkbox.addEventListener("change", function (e) {
         const parent = e.target.closest(".form_row");
         const input = parent.querySelector(".form_input");
         if (e.target.checked) {
           input.setAttribute("type", "text");
         } else {
           input.setAttribute("type", "password");
         }
       });
     });
   }
 };