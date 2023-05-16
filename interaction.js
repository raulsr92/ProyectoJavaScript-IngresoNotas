//Lógica 1//

//2° Tarjetas de definiciones

const cardsList = [];

cardsList.push(
    {
        name:"Promedio",
        description:"También conocida como media, es una medida de tendencia central que es igual al promedio aritmético de un conjunto de datos, que se obtiene al sumarlos y el resultado se divide entre el número de datos."
    }
);

cardsList.push(
    {
        name:"Moda",
        description:"También conocida como media, es una medida de tendencia central que es igual al promedio aritmético de un conjunto de datos, que se obtiene al sumarlos y el resultado se divide entre el número de datos."
    }
);

cardsList.push(
    {
        name:"Mediana",
        description:"La mediana, junto con la media y la varianza es un estadístico muy ilustrativo de una distribución. Al contrario que la media que puede estar desplazada hacia un lado o a otro, según la distribución, la mediana siempre se sitúa en el centro de esta. Dicho sea paso, a la forma de la distribución se le conoce como curtosis. Con la curtosis podemos ver hacia dónde está desplaza la distribución. "
    }
);

console.log(cardsList);

// Ciclo for...of para recorrer el objeto cardsList //

function crearCards(array){
    
    for (const card of array) {
        const cardAside = document.createElement("aside");
        cardAside.setAttribute("class", "statistic--detail");

        const container  = document.querySelector(".statistics__mediana")
        container.append(cardAside);

        const title = document.createElement("h4");
        cardAside.append(title);
        title.innerHTML=card.name;

        const definition = document.createElement("p");
        cardAside.append(definition);
        definition.innerHTML=card.description;
    }
}

crearCards(cardsList);






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
