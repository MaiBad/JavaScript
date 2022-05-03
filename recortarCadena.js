function recortarCadena(str, num) {
    if(str.length>num){
      let numero = str.slice(0,num);
      return numero+"...";
    }
    return str
  }
  console.log(recortarCadena("Holauwu", 3));