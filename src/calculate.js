function calculateBill (billAmount, taxRate) {
  console.log(billAmount + '-' + taxRate)
  const total = billAmount + billAmount * taxRate
  return total
}
calculateBill(100, 0.13)
const billtotal = calculateBill(20 + 10 + 50, 0.75)
console.log(billtotal)
