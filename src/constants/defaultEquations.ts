export interface Equation {
  id: number
  equation: string
  functionName: string
  nextFunctionId: number
}

export const DEFAULT_EQUATIONS = [
  {
    id: 1,
    equation: 'x^2',
    functionName: 'Function 1',
    nextFunctionId: 2,
    initial: true,
    final: false,
  },
  {
    id: 2,
    equation: '2x+4',
    functionName: 'Function 2',
    nextFunctionId: 4,
    final: false,
    initial: false, 
  },
  {
    id: 3,
    equation: 'x^2+20',
    functionName: 'Function 3',
    nextFunctionId: -1,
    final: true,
    initial: false,
  },
  {
    id: 4,
    equation: 'x-2',
    functionName: 'Function 4',
    nextFunctionId: 5,
    initial: false,
    final: false,
  },
  {
    id: 5,
    equation: 'x/2',
    functionName: 'Function 5',
    nextFunctionId: 3,
    initial: false,
    final: false,
  },
]
