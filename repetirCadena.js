function repetirCadena(str, num) {
    let cadena="";
    for(let i=0;i<num;i++){
      cadena += str
    }
    return cadena;
  }
  
  console.log(repetirCadena("abc", 3))