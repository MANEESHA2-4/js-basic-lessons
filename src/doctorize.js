const doc = doctorize('maneesha')
console.log(doc)
function doctorize (firstName) {
  // eslint-disable-next-line no-template-curly-in-string
  return `Dr. ${firstName}`
}
