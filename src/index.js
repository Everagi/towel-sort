
function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, row, index) => {
    const sortedRow = index % 2 === 0 ? row : row.reverse();
    return acc.concat(sortedRow);
  }, []);
}

module.exports = function towelSort(matrix) {
  return [];
}
