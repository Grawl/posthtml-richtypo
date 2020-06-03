'use strict'
const { default: richtypo } = require('richtypo')
const { default: rulesEn } = require('richtypo-rules-en')
/**
 * Apply typography rules to text
 *
 * @param {string} text
 * @param {array} [rules]
 * @returns {string}
 */
const richtypoInstance = (text, rules) => {
  try {
    if (!text) return ''
    if (!rules) {
      rules = rulesEn
    }
    return richtypo(rules, text)
  } catch (error) {
    console.log(error)
  }
}
const typography = (tree, { attribute, rules }) => {
  /*
  Input:
  <p>There are 1000 "rules" to enrich your text</p>

  Output:
  <p>There are 1,000 “rules” to&nbsp;enrich your text</p>
  */
  tree.walk(node => {
    try {
      if (
        // Do not process empty element
        !node.content ||
        // Requires attribute to process node text content
        !(node.attrs && node.attrs.hasOwnProperty(attribute))
      ) return node
      node.content = node.content.map(chunk => {
        if (typeof chunk === 'string') {
          let text = chunk
          text = richtypoInstance(text, rules)
          chunk = text
        }
        return chunk
      })
      return node
    } catch (error) {
      handleError(error, node)
    }
  })
}
function handleError (error, ...attrs) {
  console.error({ error, attrs })
}
module.exports = (options) => {
  let { attribute, rules } = options
  attribute = attribute || 'data-richtypo'
  return tree => {
    return typography(tree, { attribute, rules })
  }
}
