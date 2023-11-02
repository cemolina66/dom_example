const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const pSuma = document.querySelector('#result2');
//const pResultEnt = document.querySelector('#result');

console.log(btn);
// Opcion 1

// form.addEventListener('submit', btnOnClick, false);

// function btnOnClick(event) {
//     console.log({event});
//     event.preventDefault(); //Evito recargar la pagina y asi muestra el resultado
//     const concatenaInputs = input1.value + input2.value;
//     console.log(concatenaInputs);
//     pResult.innerText = "La Concatenacion es: " + concatenaInputs;

//     pResultEnt = +input1.value + +input2.value;
//     console.log(pResultEnt);
//     pSuma.innerText = "La suma es: " + pResultEnt;
// }


// Opcion 2
btn.addEventListener('click', btnOnClick, false);

function btnOnClick(event) {
    console.log({event});
    event.preventDefault(); //Evito recargar la pagina y asi muestra el resultado
    const concatenaInputs = input1.value + input2.value;
    console.log(concatenaInputs);
    pResult.innerText = "La Concatenacion es: " + concatenaInputs;

    pResultEnt = +input1.value + +input2.value;
    console.log(pResultEnt);
    pSuma.innerText = "La suma es: " + pResultEnt;
}


