//Lógica 1//

let btn_pro, btn_mo, btn_me;

btn_pro = document.querySelector(".btn--promedio");
console.log(btn_pro)

btn_mo = document.querySelector(".btn--mediana");
console.log(btn_mo)

btn_me = document.querySelector(".btn--moda");
console.log(btn_me)


btn_pro.addEventListener("click", toggleCard);

btn_mo.addEventListener("click", toggleCard);

btn_me.addEventListener("click", toggleCard);
