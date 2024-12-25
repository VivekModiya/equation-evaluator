import { generalizeEquationValues } from './generalizeEquation'
import { isOperator } from './isOperator'

export const splitStringWithOperators = (str: string) => {
  const splitArray = []
  let lastItem = ''

  for (let i = 0; i < str.length; i++) {
    const val = str.charAt(i)
    if (isOperator(val)) {
      splitArray.push(lastItem)
      splitArray.push(val)
      lastItem = ''
    } else {
      lastItem = `${lastItem}${val}`
    }
  }
  splitArray.push(lastItem)

  // Generalizing the array by splitting 2x into 2 * x
  return generalizeEquationValues(splitArray)
}
