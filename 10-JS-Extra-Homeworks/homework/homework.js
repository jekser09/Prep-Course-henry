// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí  
  let contadas=[];  
  let obj={};
  for(let i=0;i<string.length;i++){
    let contador=0;
    let bandera=false;
    for(let b=0;b<contadas.length;b++){
      if(string.charAt(i)===contadas[b]){
        bandera=true;
        break;
      }
    }
    if(!bandera){
      contadas.push(string.charAt(i));
      for(let j=0;j<string.length;j++){
        if(string.charAt(i)===string.charAt(j)){         
          contador+=1;
        }
      }      
      obj[string.charAt(i)]=contador;
    } 
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let letras=s.split("");
  let mayus=[];
  let minus=[];
  for(let i=0;i<letras.length;i++){
    if(letras[i]===letras[i].toUpperCase()){
      mayus.push(letras[i]);
    }else{
      minus.push(letras[i]);
    }
  }
  return mayus.join("")+minus.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras=str.split(" ");
  let auxiliar=[];
  for(let i=0;i<palabras.length;i++){
    let palabra=palabras[i].split("");
    palabra=palabra.reverse();
    auxiliar.push(palabra.join(""));
  }
  return auxiliar.join(" ");
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let invertido=String(numero).split("");
  invertido=Number(invertido.reverse().join(""));  
  if(numero===invertido){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada.
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí.
  let nuevo=cadena.split("").filter(x=>x!=="a" && x!=="b" && x!=="c");
  return nuevo.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí  
  if(arr.length<=1){
    return arr;
  }

  let izquierda=[];
  let derecha=[];
  let auxiliar=[];
  let pivote=arr.pop();
  let n=arr.length;

  for(let i=0;i<n;i++){
    if(arr[i].length<=pivote.length){
      izquierda.push(arr[i]);
    }else{
      derecha.push(arr[i]);
    }
  }
  return auxiliar.concat(sortArray(izquierda),pivote,sortArray(derecha));  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  return arreglo1.filter(x=>arreglo2.indexOf(x)!==-1);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

