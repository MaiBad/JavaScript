/*function factorialize(num) {
  let factorial=1;
  for(let i=1;i<=num;i++){
    factorial*=i
  }
  return factorial;
}
*/

function factorialize(num) {
    if(num===0){
      return 1;
    }
    return num*factorialize(num-1);
  }
  
  console.log(factorialize(6));