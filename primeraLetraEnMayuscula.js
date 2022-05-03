/*function titleCase(str) {
  let cadena = str.split(" ");
  for(let i=0;i<cadena.length;i++){
    cadena[i] = cadena[i][0].toUpperCase()+cadena[i].slice(1).toLowerCase();
  }
  return cadena.join(" ");
}*/

function camelCase(str) {
    let cadena = str.split(" ");
    let st = []
    for(let cad in cadena){
      st[cad] = cadena[cad][0].toUpperCase()+cadena[cad].slice(1).toLowerCase();
    }
    return st.join(" ");
  }
  
  console.log(camelCase("Hola ¿Cómo estás? xd"));