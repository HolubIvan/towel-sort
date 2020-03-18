
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length ===0){
    return [];
  }
  if(matrix.length === 1){
      return matrix;
  }

  let array = [];
  let reverse = false;

  matrix.forEach(function(el){
    if(!reverse){
        el.forEach(function(e){
            array.push(e)
        })
        reverse = true;
    } else{
        el.reverse().forEach(function(e){
            array.push(e);
        })
        reverse = false;
    }
  })
  
  return array;
}
