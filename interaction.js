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

    if(inputOne.value=="" || inputTwo.value==""){
        alert("No deje campos vacíos")

    } else if (inputTwo.value<0 || inputTwo.value>20){
        alert("Las notas deben estar en el rango entre 0 y 20")
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

//Cálculo_del_promedio

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

//Cálculo_de_la_mediana

function esPar(array){
	if (array.length % 2==0){
		return true
	} else {
		return false
	}
}

function esImpar(array){
	if(array.length%2==1){
		return true
	} else{
		return false
	}
}

function ordenarLista(array){
		
    const arraySorted = array.sort((a,b)=>{return a.grade-b.grade});

    return arraySorted;
}



function calcularMediana(array){
    let mediana, indiceMediana, arraySorted;

    const isMessage1Closed = message1.classList.contains("inactive");
    console.log(isMessage1Closed);
    const isMessage2Closed = message2.classList.contains("inactive");
    console.log(isMessage2Closed);

    if(array.length==0){
        window.alert("¡No se han ingresado notas!.")
    
    } else{
        arraySorted = ordenarLista(array);  
        console.log(arraySorted);

        if(esImpar(arraySorted)){
            indiceMediana = ((arraySorted.length+1)/2)-1; //le resto 1 porque un array inicia en 0
            mediana = (arraySorted[indiceMediana]).grade;
            console.log(mediana);
        } else if(esPar(arraySorted)){
            let indiceMediana1= (arraySorted.length/2)-1; //le resto 1 porque un array inicia en 0
            let indiceMediana2= indiceMediana1 + 1;
            mediana = ((arraySorted[indiceMediana1]).grade+(arraySorted[indiceMediana2]).grade)/2;
            console.log(mediana);
        }
        
         //Aperturar el campo para mostrar resultado    
         if(isMessage1Closed){
            message1.classList.remove("inactive");
            console.log(message1.classList.contains("inactive"));
            message1.innerHTML="La mediana es: ";
        }else{
            message1.innerHTML="La mediana es: ";
        }
        if(isMessage2Closed){
            message2.classList.remove("inactive");
            console.log(message2.classList.contains("inactive"));
            message2.innerHTML=mediana.toFixed(2);
    
        }else{
            message2.innerHTML=mediana.toFixed(2);
        }      

    }
};

function calcularModa(array){
    let UniModa ;
    let BiModa = {};
    let indices = [];
    const listaGrades = {};


    const isMessage1Closed = message1.classList.contains("inactive");
    const isMessage2Closed = message2.classList.contains("inactive");

    if(array.length==0){
        window.alert("¡No se han ingresado notas!.")
    } else{

        for (let i = 0; i < array.length; i++) {
            const element = array[i].grade;
            console.log(element);

            let claves = Object.keys(listaGrades);
            console.log(claves);
            let isRepetido = claves.find(values => values == element);
            console.log(isRepetido);
            if(isRepetido){
                listaGrades[element] = listaGrades[element]+1;
            } else{
                listaGrades[element] = 1;
            }
            console.log(listaGrades);
        }

        let valores = Object.values(listaGrades);
        console.log(valores);
        let claves = Object.keys(listaGrades);
        console.log(claves);
        let mayor = valores[0];
        for (let j = 0; j < valores.length; j++) {
            if(valores[j]>mayor){
                mayor = valores[j];
            }            
        }
        console.log(mayor);

        let mayores =valores.filter(value=>value==mayor);
        console.log(mayores);

        let idx = valores.indexOf(mayor);
        while(idx !== -1){
            indices.push(idx);
            idx = valores.indexOf(mayor, idx +1);
        }
        console.log(indices);

        
        if (mayores.length==2){

            BiModa["moda1"] = claves[indices[0]];
            BiModa["moda2"] = claves[indices[1]];
            console.log(BiModa);

        //Aperturar el campo para mostrar resultado   
        if(isMessage1Closed){
            message1.classList.remove("inactive");
            message1.innerHTML="La(s) moda(s) es(son): ";
        }else{
            message1.innerHTML="La(s) moda(s) es(son): ";
        }
        if(isMessage2Closed){
            message2.classList.remove("inactive");
            message2.innerHTML=moda["moda1"]+" y "+moda["moda2"];
    
        }else{
            message2.innerHTML=moda["moda1"]+" y "+moda["moda2"];
        }          
    
        } else if(mayores.length>2){
            for (let k = 0; k < indices.length; k++) {
                BiModa[k+1] =  claves[indices[k]];
            }
            console.log(BiModa);
    
            let modaKeys = Object.keys(BiModa);
            console.log(modaKeys.length)
            let modaValues = Object.values(BiModa);
    
            for (let l = 0; l < modaKeys.length; l++) {
                const atributo = modaKeys[l];            
                console.log(`El array es multimodal. La moda N° ${atributo} es ${moda[atributo]}`)
            }
        } else{

        }


        
/*
        indexOfModa = valores.indexOf(mayor);
        console.log(indexOfModa);
        moda= claves[indexOfModa]; 
        console.log(moda);*/

       
    }
};
