function numeroMayor(arr) {
    let arreglo = [];
    for(let i=0;i<arr.length;i++){
      let numero = arr[i][0];
      for(let j=1;j<arr[i].length;j++){
        if(arr[i][j]>numero){
          numero = arr[i][j]
        }
      }
      arreglo.push(numero);
    }
    return arreglo;
  }
  console.log(numeroMayor([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  