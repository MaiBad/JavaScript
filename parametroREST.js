/*const sum = (...args) => {
  let suma=0;
  for(let i=0;i<args.length;i++){
    suma+=args[i];
  }
  return suma;
}*/

const sum = (...args) => {
    let suma=0;
    args.forEach(n=>{
      suma+=n;
    });
    return suma;
  };
  
  console.log(sum(1,3,4,5,76,7,71))
  
  