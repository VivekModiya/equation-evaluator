import { isOperator } from './isOperator'
import { splitStringWithOperators } from './splitStringWithOperators'

export const isValidEquation = (string: string = ''): boolean => {
  const equationArray = splitStringWithOperators(string)

  const hasAtleastOneX = equationArray.some(val => val === 'x')
  const hasOddLength = equationArray.length % 2 === 1
  const isValidValuesAndOperands = equationArray.every((value, index) => {
    // If index is even then the value should be either 'x' or a number
    if (index % 2 === 0) {
      if (value === 'x') {
        return true
      } else if (isNaN(Number(value)) === false) {
        return true
      } else {
        return false
      }
      // If index is odd then the value should be '+', '-', '*', '/' or '^'
    } else {
      if (isOperator(value)) {
        return true
      } else {
        return false
      }
    }
  })

  return hasAtleastOneX && hasOddLength && isValidValuesAndOperands
}
