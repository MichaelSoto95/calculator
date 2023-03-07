   const OpDictionary ={sum :'+',
                   min:'-',
                   mult:'*',
                   div:'/',
                   mod:'%',
                  exponent:'^'} 
 let mathOperator; 
let equalsAgain =false;

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
    mathOperator =OpDictionary[op]; //variable global
    let  firstNum =Number(document.getElementById('result').textContent);
  let  operator =symbol.textContent;

    document.getElementById('result').append(symbol);
      console.log(operator);
    return operator;
}

function sqrt(){
  let num= document.getElementById('result').textContent;
 num = Math.sqrt(Number(num));
 let displayRes= document.createElement('h1');
displayRes.innerText =Number(num).toFixed(5);
clearAll();//borro el div
document.getElementById('result').append(displayRes); 

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
    let oper = mathOperator;
    console.log(oper);
    let  res = result.split(String(oper)); //dividimos el cintenisdo en un arrelo dividido por el operador

 //Quero coger el valor del operador!!!!!!!!PENDIENTE
//asigno valores
let num1 = Number(res[0]);
let num2 = Number(res[1]);
console.log(num1);
console.log(num2);
//creamos variable de resultadofinal con la operacion matematica
let endResult =0;
//condicional de operador matematico
 if (oper ==OpDictionary.mult) {
   endResult = num1 * num2; 
}
 else if(oper ==OpDictionary.div){
    endResult = num1 / num2;

 }
 else if(oper ==OpDictionary.sum){
    endResult = num1 + num2;

 }
 else if(oper ==OpDictionary.min){
    endResult = num1 - num2;

 }
 else if(oper ==OpDictionary.exponent){
  endResult = Math.pow(num1,num2);

}
else if(oper ==OpDictionary.exponent){
  endResult = Math.pow(num1,num2);

} else if(oper ==OpDictionary.mod){
  endResult = num1 % num2;
}
console.log(endResult);

//cramos elemento H1
let displayRes= document.createElement('h1');
displayRes.innerText =endResult;
clearAll();//borro el div
document.getElementById('result').append(displayRes); //pongo el resultado
equalsAgain =true;
}




//theme
let checkBox =document.querySelector('#check-box');

checkBox.addEventListener('click',function isChecked(e) {
  console.log(e.type);
  if (checkBox.checked == false) {
    document.documentElement.style.setProperty('--background', '#efdbcb');
    document.documentElement.style.setProperty('--equalsColor', '#3b8ac4');
    document.documentElement.style.setProperty('--buttonColor', '#345da7');
    document.documentElement.style.setProperty('--resColor', '#4bb4de');
    document.documentElement.style.setProperty('--fontColor', '#c1eeff');
    document.documentElement.style.setProperty('--theme', '#fff');

  }
  else{
    document.documentElement.style.setProperty('--background', '#41436a');
    document.documentElement.style.setProperty('--equalsColor', '#fe9677');
    document.documentElement.style.setProperty('--buttonColor', '#984063');
    document.documentElement.style.setProperty('--resColor', '#fe9677');
    document.documentElement.style.setProperty('--fontColor', ' #f64668');
    document.documentElement.style.setProperty('--theme', '#1b1b1b');
  }
});