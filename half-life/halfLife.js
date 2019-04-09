module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
  let halfLife = (Math.log2(initialQuantity/quantityRemaining))/time;
  return halfLife;
}


