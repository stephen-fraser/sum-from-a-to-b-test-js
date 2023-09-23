
function sum(fromN, toN) {
  if (toN === fromN){
    return toN;
  }
  return toN + sum(fromN, toN - 1);
}

module.exports = sum;
