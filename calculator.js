const OpDiccionary ={'sum':'+',
                   'min':'-',
                   'mult':'*',
                   'div':'/',
                   'mod':'%'}


//funcion que anade los elementos
function placeItem(element){
    let item = element.id;
  let num= document.createElement('h1');
  num.setAttribute('id','calc-item');
  num.innerText = item;
   document.getElementById('result').append(num); 
   console.log(OpDiccionary.item);
   console.log(OpDiccionary.sum);

}


//funcion que remueve un elemnto
function removeItem(){
    document.getElementById('calc-item').remove(); 
}
//funcion que remueve todos los elmentos
function clearAll(){
    document.getElementById('result').innerHTML =""; 
}


function finalResult(){
    let result= document.getElementById('result').textContent;
    let finalresult = 0 + +parseInt(result);
console.log(finalresult);

}