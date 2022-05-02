// let firstValue = parseInt(prompt( "Entrez une premiere valeur" ));
// let operator = prompt("Choisis un opérateur");
// let secondValue = parseInt(prompt( "Entrez une deuxieme valeur" ));
// switch(operator) {
//     case "+":
//         console.log(firstValue + secondValue)
//     break;
//     case "-":
//         console.log(firstValue - secondValue)
//     break;
//     case "*":
//         console.log(firstValue * secondValue)
//     break;
//     case "/":
//         console.log(firstValue / secondValue)
//     break;
// }

let form = document.getElementById('form');
console.log(form);


const button = document.querySelector('.button');
button.addEventListener('click', function (event){
   event.preventDefault();
   console.log('test')
   for (let i=0;i<form.length-1;i++){console.log(form[i].value)};
})
