export class EquationStack {
  private stackValues: (number | string)[] = []

  constructor(stackValues: (number | string)[] = []) {
    this.stackValues = stackValues
  }

  top = () => this.stackValues[this.stackValues.length - 1]

  size = () => this.stackValues.length

  clear = () => {
    this.stackValues = []
  }
  isEmpty = () => {
    this.stackValues.length === 0
  }

  push = (val: string | number) => {
    this.stackValues.push(val)
  }

  pop = () => this.stackValues.pop()

  toArray = () => this.stackValues
}
