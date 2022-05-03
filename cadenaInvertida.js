/*function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}*/

function reverseString(str) {
  let cadena = "";
  let num = str.length;
  for(let i=num-1;i>=0;i--){
    cadena += str[i];
  }
  return cadena;
}

console.log(reverseString("hello"))