import { InputBox } from '../InputBox'
import styles from './index.module.scss'
import { OutputBox } from '../OutputBox'
import { Background, Box } from '../../components'
import { FunctionCard } from '../FunctionCard'
import React from 'react'
import { DEFAULT_EQUATIONS } from '../../constants'
import { evaluateEquation } from '../../utils/evaluateEquation'
import { getOrderedEquations } from '../../utils/getOrderedEquations'

export const Playground = () => {
  const [initialValue, setInitialValue] = React.useState(0)

  const [equations, setEquations] = React.useState(DEFAULT_EQUATIONS)

  const finalValue = React.useMemo(
    () =>
      getOrderedEquations(equations).reduce((prev, curr) => {
        return evaluateEquation(curr.equation, prev)
      }, initialValue),
    [equations, initialValue]
  )

  return (
    <Box stylesObject={{ height: 100 }}>
      <Background
        stylesObject={{ height: 100, overflow: 'hidden', display: 'flex' }}
      >
        <Box
          stylesObject={{
            width: 100,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
          }}
          className={styles.padding}
        >
          <Box stylesObject={{ height: 100 }}>
            <InputBox
              value={initialValue}
              onChange={e => {
                if (isNaN(Number(e.target.value)) === false) {
                  setInitialValue(Number(e.target.value))
                }
              }}
            />
          </Box>
          <Box
            stylesObject={{
              width: 100,
              height: 100,
              overflow: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className={styles.container}
          >
            {equations.map((equationDetails, index) => {
              return (
                <FunctionCard
                  title={equationDetails.functionName}
                  equation={equationDetails.equation}
                  setEquation={val => {
                    setEquations(prev => {
                      const newEquations = [...prev]
                      newEquations[index] = {
                        ...newEquations[index],
                        equation: val,
                      }
                      return newEquations
                    })
                  }}
                />
              )
            })}
          </Box>
          <Box stylesObject={{ height: 100, position: 'relative' }}>
            <OutputBox value={finalValue} />
          </Box>
        </Box>
      </Background>
    </Box>
  )
}
