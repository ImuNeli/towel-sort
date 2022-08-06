
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  else {
    for (i = 0; i < matrix.length; i++) {
      if ((matrix[i] !== 0) && (i % 2 !== 0)) {
        matrix[i] = matrix[i].reverse();
      }
    }
}
return matrix.flat();
}
