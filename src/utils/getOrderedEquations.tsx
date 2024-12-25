import { Equation } from '../constants'

export const getOrderedEquations = (equations: Equation[]) => {
  const orderedEquations = []

  let currEquation = equations.find(eq => eq.nextFunctionId === -1)

  while (Boolean(currEquation)) {
    orderedEquations.unshift(currEquation as Equation)
    console.log(currEquation?.nextFunctionId)
    currEquation = equations.find(eq => eq.nextFunctionId === currEquation?.id)
  }
  return orderedEquations
}
