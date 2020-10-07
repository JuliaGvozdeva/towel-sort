
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let answerArray = [];

  if (matrix === undefined){
    return [];
  }
  
  for (let i = 0; i < matrix.length; i++){
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++){
        answerArray.push(matrix[i][j]);
      }
    }
    else {
      for (let j = matrix[i].length-1; j >= 0; j--){
        answerArray.push(matrix[i][j]);
      }
    }
  }
  return answerArray;
}

// towelSort([
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//   [ 7, 8, 9 ],
//  ]
//  );
