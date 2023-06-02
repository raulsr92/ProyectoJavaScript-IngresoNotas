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
        description:"La moda representa el valor o categoría más común dentro del conjunto de datos. La media, la mediana y la moda son las tres medidas de tendencia central más usadas para poblaciones que no cuentan con demasiados datos, es decir, que no necesitan agruparse."
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
        cardAside.setAttribute("class", "statistic--detail inactive");

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

icon_mo = document.querySelector(".queMo");
console.log(icon_mo)

icon_me = document.querySelector(".queMe");
console.log(icon_me)

let cardDef1, cardDef2, cardDef3;

cardDef1  = document.querySelector(".statistics__mediana aside:nth-child(3)");  //promedio
console.log(cardDef1);
cardDef2  = document.querySelector(".statistics__mediana aside:nth-child(4)"); //moda
console.log(cardDef2);
cardDef3  = document.querySelector(".statistics__mediana aside:nth-child(5)"); //mediana


icon_pro.addEventListener("click", toggleCard1);

icon_mo.addEventListener("click", toggleCard2);

icon_me.addEventListener("click", toggleCard3);

cardDef1.addEventListener("click", closeSelf1);
cardDef2.addEventListener("click", closeSelf2);
cardDef3.addEventListener("click", closeSelf3);

function toggleCard1(){
    const isMedianaClose= cardDef2.classList.contains("inactive");
    console.log(isMedianaClose);
    const isModaClose= cardDef3.classList.contains("inactive");

    if(!isMedianaClose){
        cardDef2.classList.add("inactive")
    } else if(!isModaClose){
        cardDef3.classList.add("inactive")
    }

    cardDef1.classList.toggle("inactive");
    console.log(cardDef1);

};

function toggleCard2(){
    const isPromedioClose= cardDef1.classList.contains("inactive");
    const isModaClose= cardDef3.classList.contains("inactive");

    if(!isPromedioClose){
        cardDef1.classList.add("inactive")
    } else if(!isModaClose){
        cardDef3.classList.add("inactive")
    }

    cardDef2.classList.toggle("inactive");
    console.log(cardDef2);

};

function toggleCard3(){
    const isPromedioClose= cardDef1.classList.contains("inactive");
    const isMedianaClose= cardDef2.classList.contains("inactive");

    if(!isPromedioClose){
        cardDef1.classList.add("inactive")
    } else if(!isMedianaClose){
        cardDef2.classList.add("inactive")
    }


    cardDef3.classList.toggle("inactive");
    console.log(cardDef3);
};

function closeSelf1(){
    const isPromedioClose= cardDef1.classList.contains("inactive");
    if(!isPromedioClose){
        cardDef1.classList.add("inactive")
    } 
}
function closeSelf2(){
    const isMedianaClose= cardDef2.classList.contains("inactive");
    if(!isMedianaClose){
        cardDef2.classList.add("inactive")
    } 
}

function closeSelf3(){
    const isModaClose= cardDef3.classList.contains("inactive");
    if(!isModaClose){
        cardDef3.classList.add("inactive")
    } 
}



//Lógica 2//

const inputOne  = document.querySelector("#alumno");
console.log(inputOne);

const inputTwo  = document.querySelector("#grades");
console.log(inputTwo);

const botonRegistro = document.querySelector(".item7");
console.log(botonRegistro);

botonRegistro.addEventListener("click", agregarAlumno);

const alumnos = []; 

function agregarAlumno(){

    if(inputOne.value==0 || inputTwo.value==0){
        alert("No deje campos vacíos")

    } else{
        alumnos.push(
            {
                name: inputOne.value,
                grade: parseInt(inputTwo.value),
            }
        );
        inputOne.value="";
        inputTwo.value="";
    }

}

console.log(alumnos);

//Lógica 3//

const botonPromedio = document.querySelector(".btn--promedio");
console.log(botonPromedio);

const botonMediana = document.querySelector(".btn--mediana");
console.log(botonMediana);

const botonModa = document.querySelector(".btn--moda");
console.log(botonModa);

const message1 = document.querySelector(".result--text");
console.log(message1);

const message2 = document.querySelector(".result")
console.log(message2);


botonPromedio.addEventListener("click", function(){calcularPromedio(alumnos)});

botonMediana.addEventListener("click", function(){calcularMediana(alumnos)});

botonModa.addEventListener("click", function(){calcularModa(alumnos)});


function calcularPromedio(array){
    let media, sum, valorInicial;
    valorInicial=0;

    const isMessage1Closed = message1.classList.contains("inactive");
    console.log(isMessage1Closed);
    const isMessage2Closed = message2.classList.contains("inactive");
    console.log(isMessage2Closed);

    if(array.length==0){
    window.alert("¡No se han ingresado notas!.")

    } else{
        sum = array.reduce((accumulator, currentValue)=> {return (accumulator) + (currentValue.grade)},valorInicial);
        console.log(sum);
        
        media=sum/array.length;
        console.log(media);
    
        //Aperturar el campo para mostrar resultado    
        if(isMessage1Closed){
            message1.classList.remove("inactive");
            console.log(message1.classList.contains("inactive"));
            message1.innerHTML="El promedio es: ";
        }else{
            message1.innerHTML="El promedio es: ";
        }
        if(isMessage2Closed){
            message2.classList.remove("inactive");
            console.log(message2.classList.contains("inactive"));
            message2.innerHTML=media.toFixed(2);
    
        }else{
            message2.innerHTML=media.toFixed(2);
        }
    }
};

function calcularMediana(array){
    if(array.length==0){
        window.alert("¡No se han ingresado notas!.")
    
        }
};

function calcularModa(array){
    if(array.length==0){
        window.alert("¡No se han ingresado notas!.")
    }
};
