//Lógica 1//

let icon_pro, icon_mo, icon_me;

icon_pro = document.querySelector(".quePro");
console.log(icon_pro)

icon_mo = document.querySelector(".queProMo");
console.log(icon_mo)

icon_me = document.querySelector(".queMe");
console.log(icon_me)


icon_pro.addEventListener("click", toggleCard);

icon_mo.addEventListener("click", toggleCard);

icon_me.addEventListener("click", toggleCard);
