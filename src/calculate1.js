function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate  Bill!!')
  console.log(
    'billAmount:' + billAmount + 'taxRate:' + taxRate + 'tipRate:' + tipRate
  )
  const total = billAmount + billAmount + taxRate + billAmount + tipRate
  return total
}
calculateBill(100)
calculateBill(100, 0.66)
calculateBill(100, 0.66, 0.77)
