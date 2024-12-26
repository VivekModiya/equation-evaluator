import { isValidEquation } from './isValidEquation'
import { EquationStack } from './equationStack'
import { splitStringWithOperators } from './splitStringWithOperators'

export const evaluateEquation = (equation: string, variableValue: number) => {
  const normalizedValue = (val?: string | number) => {
    return Number(val === 'x' ? variableValue : val)
  }

  if (isValidEquation(equation)) {
    const equationStack = new EquationStack()
    const equationArray = splitStringWithOperators(equation)
    const reversedEquationArray = [...equationArray].reverse()

    // Looping through the equation in revers order for calculating the power ("^") value as it calculated in reverse order
    reversedEquationArray.forEach(value => {
      const top = equationStack.top() // Popping up the
      if (top === '^') {
        equationStack.pop() // Popping up the operator
        const rightOperand = equationStack.pop() // Popping up the operand
        const leftOperand = value

        // Calculating the value
        const output =
          normalizedValue(leftOperand) ** normalizedValue(rightOperand)

        // Pushing back the final value
        equationStack.push(output)
      } else {
        equationStack.push(value)
      }
    })

    let updatedEquation = equationStack.toArray()
    equationStack.clear()

    // Looping through the equation in forward order for calculating the "*" or "/"
    updatedEquation.reverse().forEach(value => {
      const top = equationStack.top() // Popping up the
      if (top === '/' || top === '*') {
        equationStack.pop() // Popping up the operator
        const leftOperand = equationStack.pop() // Popping up the operand
        const rightOperand = value

        // Calculating the value
        const output =
          top === '*'
            ? normalizedValue(leftOperand) * normalizedValue(rightOperand)
            : normalizedValue(leftOperand) / normalizedValue(rightOperand)

        // Pushing back the final value
        equationStack.push(output)
      } else {
        equationStack.push(value)
      }
    })

    updatedEquation = equationStack.toArray()
    // Looping through the equation in forward order for calculating the "+" or "-"
    updatedEquation.forEach(value => {
      const top = equationStack.top() // Popping up the
      if (top === '+' || top === '-') {
        equationStack.pop() // Popping up the operator
        const leftOperand = equationStack.pop() // Popping up the operand
        const rightOperand = value

        // Calculating the value
        const output =
          top === '+'
            ? normalizedValue(leftOperand) + normalizedValue(rightOperand)
            : normalizedValue(leftOperand) - normalizedValue(rightOperand)

        // Pushing back the final value
        equationStack.push(output)
      } else {
        equationStack.push(value)
      }
    })

    return normalizedValue(equationStack.top())
  }
  return 0
}
