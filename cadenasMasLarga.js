function cadenaMasLarga(str) {
    let palabras = str.split(" ");
    let max=0
    for(let i=0;i<palabras.length;i++){
      if(palabras[i].length>max){
        max=palabras[i].length;
      }
    }
    return max;
  }
  
  console.log(cadenaMasLarga("Hola, te quiero owoooooooooooooooooo"));