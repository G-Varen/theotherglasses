function narcissistic(value) {
  let numChart = value.toString();
  let num = numChart.length;
  let result = 0;
  
  for(let i=0; i<num; i++){
    let temp = +numChart[i];
    result +=  Math.pow( temp, num);
  }
  
  if(value == result){
    return true;
  }
  
  return false;
}

console.log(narcissistic(1938));