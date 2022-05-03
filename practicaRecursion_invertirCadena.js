function numeroCadena(str){
    let num = str.length;
    return modificarString(str,num);
  }
  
  function modificarString(stri,numc){
    if(numc<1){
      return "xd";
    }else{
      console.log(stri[numc-1]);
      return modificarString(stri,numc-1);
    }
  }
  numeroCadena("te quiero owo");