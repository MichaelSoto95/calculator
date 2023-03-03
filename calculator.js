   const OpDictionary ={sum :'+',
                   min:'-',
                   mult:'*',
                   div:'/',
                   mod:'%'} 


//funcion que anade los elementos
function placeItem(element){
    let x ='sum'
    let item = element.id;
  let num= document.createElement('h1');
  num.setAttribute('id','calc-item');
  num.innerText = item;
   document.getElementById('result').append(num); 
  
}
//funcion que anade los operadores ej * + -
function placeOperator(element){
    let op = element.id;
    let symbol= document.createElement('h1');
    symbol.setAttribute('id','calc-item');
    symbol.innerText = OpDictionary[op];
    let  firstNum =Number(document.getElementById('result').textContent);
    console.log(typeof(firstNum));
  let  operator =symbol.textContent;
    document.getElementById('result').append(symbol);
      console.log(operator);
    return operator;
}
function operator(){
}


//funcion que remueve un elemento
function removeItem(){
    let res = document.getElementById('result').textContent;

    if (res !=='' ) {
        document.getElementById('calc-item').remove(); 
    }
    
}
//funcion que remueve todos los elmentos
function clearAll(){
    document.getElementById('result').innerHTML =""; 
}


function finalResult(){
    let result= document.getElementById('result').textContent;//tomamos el contenido de el div
    let  res = result.split('*'); //dividimos el cintenisdo en un arrelo dividido por el operador
    let oper =placeOperator();
   console.log(oper);//Quero coger el valor del operador!!!!!!!!PENDIENTE
//asigno valores
let num1 = Number(res[0]);
let num2 = Number(res[1]);
console.log(num1);
console.log(num2);
//creamos variable de resultadofinal con la operacion matematica

let endResult = num1 * num2;
console.log(endResult);
//cramos elemento H1
let displayRes= document.createElement('h1');
displayRes.innerText =endResult;
clearAll();//borro el div
document.getElementById('result').append(displayRes); //pongo el resultado

}