import { InputBox } from '../InputBox'
import styles from './index.module.scss'
import { OutputBox } from '../OutputBox'
import { Background, Box } from '../../components'
import { FunctionCard } from '../FunctionCard'
import React from 'react'
import { DEFAULT_EQUATIONS } from '../../constants'
import { evaluateEquation } from '../../utils/evaluateEquation'
import { getOrderedEquations } from '../../utils/getOrderedEquations'

export const Playground = React.forwardRef<
  React.MutableRefObject<HTMLDivElement>,
  {}
>(() => {
  const [initialValue, setInitialValue] = React.useState(0)
  const [equations, setEquations] = React.useState(DEFAULT_EQUATIONS)

  const finalValue = React.useMemo(
    () =>
      getOrderedEquations(equations).reduce((prev, curr) => {
        return evaluateEquation(curr.equation, prev)
      }, initialValue),
    [equations, initialValue]
  )

  const inputBoxRef = React.useRef<HTMLDivElement>(null)
  const inputFunctionCardRef = React.useRef<HTMLDivElement>(null)

  const outputBoxRef = React.useRef<HTMLDivElement>(null)
  const outputFunctionCardRef = React.useRef<HTMLDivElement>(null)

  const [allComponentRendered, setAllComponentsRendered] = React.useState(false)

  React.useEffect(() => {
    // Simulate rendering of other components
    const timer = setTimeout(() => {
      setAllComponentsRendered(true) // Signal that rendering is complete
    }, 0) // Runs after the current event loop

    return () => clearTimeout(timer) // Cleanup
  }, [])

  const updateInputOutputBoxPosition = () => {
    const inputCardRect = inputFunctionCardRef?.current?.getBoundingClientRect()
    const inputBoxReact = inputBoxRef?.current?.getBoundingClientRect()

    const outputCardRect =
      outputFunctionCardRef?.current?.getBoundingClientRect()
    const outputBoxReact = outputBoxRef?.current?.getBoundingClientRect()

    if (inputCardRect && inputBoxReact && inputBoxRef.current) {
      inputBoxRef.current.style.left = `${
        inputCardRect.left - inputBoxReact.width - 16
      }px`
      inputBoxRef.current.style.top = `${
        inputCardRect.top +
        inputCardRect.height -
        inputBoxRef.current.clientHeight -
        14
      }px`
    }

    if (outputCardRect && outputBoxReact && outputBoxRef.current) {
      outputBoxRef.current.style.left = `${outputCardRect.right + 2}px`
      outputBoxRef.current.style.top = `${
        outputCardRect.top +
        outputCardRect.height -
        outputBoxRef.current.clientHeight -
        14
      }px`
    }
  }

  React.useEffect(updateInputOutputBoxPosition, [
    inputFunctionCardRef?.current,
    inputBoxRef?.current,
    outputFunctionCardRef?.current,
    outputBoxRef?.current,
    allComponentRendered,
  ])

  window.addEventListener('resize', updateInputOutputBoxPosition)

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
            position: 'relative',
          }}
          className={styles.padding}
        >
          <InputBox
            value={initialValue}
            onChange={e => {
              if (isNaN(Number(e.target.value)) === false) {
                setInitialValue(Number(e.target.value))
              }
            }}
            stylesObject={{ position: 'fixed' }}
            // @ts-ignore
            ref={inputBoxRef}
          />
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
                  // @ts-ignore
                  ref={
                    equationDetails.initial
                      ? inputFunctionCardRef
                      : equationDetails.final
                      ? outputFunctionCardRef
                      : null
                  }
                />
              )
            })}
          </Box>
          <OutputBox
            value={finalValue}
            stylesObject={{ position: 'fixed' }}
            // @ts-ignore
            ref={outputBoxRef}
          />
        </Box>
      </Background>
    </Box>
  )
})
