export const generalizeEquationValues = (equationArray: string[]) => {
  return equationArray.reduce<string[]>((prev, curr) => {
    const hasManyVariables = Boolean(curr.match(/.*x.*x/))
    if (curr.includes('x') && curr !== 'x' && hasManyVariables === false) {
      // Assuming the x will be at the last if not the it altometically invalidates the equation
      const firstSliece = curr.slice(0, curr.length - 1)
      const lastSliece = curr.charAt(curr.length - 1)

      return [...prev, firstSliece, '*', lastSliece]
    } else {
      return [...prev, curr]
    }
  }, [])
}
