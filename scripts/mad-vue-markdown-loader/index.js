module.exports = function (markdown) {
  const markdownStr = JSON.stringify(markdown)
  return `export default ${markdownStr}`
}
