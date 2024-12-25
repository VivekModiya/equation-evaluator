import { InputBox } from '../InputBox'
import styles from './index.module.scss'
import { OutputBox } from '../OutputBox'
import { Background, Box } from '../../components'
import { FunctionCard } from '../FunctionCard'
import React from 'react'
import { DEFAULT_EQUATIONS } from '../../constants'
import { evaluateEquation } from '../../utils/evaluateEquation'
import { getOrderedEquations } from '../../utils/getOrderedEquations'
import { ConnectionLine } from '../ConnectionLine/ConnectionLine'

export const Playground = React.forwardRef<
  React.MutableRefObject<HTMLDivElement>,
  {}
>(() => {
  const [initialValue, setInitialValue] = React.useState(0)
  const [equations, setEquations] = React.useState(DEFAULT_EQUATIONS)
  const [connectionLines, setConnectionLines] = React.useState<
    Record<
      number,
      {
        startNodeRef?: React.RefObject<HTMLDivElement> | null
        endNodeRef?: React.RefObject<HTMLDivElement> | null
      }
    >
  >({})

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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAllComponentsRendered(true)
    }, 0)
    return () => clearTimeout(timer) // Cleanup
  }, [])

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
            stylesObject={{ position: 'absolute' }}
            // @ts-ignore
            ref={inputBoxRef}
            setCircleRef={ref =>
              setConnectionLines(prev => {
                prev[0] = {
                  startNodeRef: ref,
                  ...(prev[0] ?? {}),
                }
                return prev
              })
            }
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
                <>
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
                    setStartNodeRef={ref => {
                      if (
                        connectionLines[equationDetails.id]?.startNodeRef !==
                        ref
                      ) {
                        let connectionLineId
                        if (equationDetails.initial) {
                          connectionLineId = 0
                        } else {
                          connectionLineId =
                            equations.find(
                              eq => eq.nextFunctionId === equationDetails.id
                            )?.id ?? -2
                        }
                        setConnectionLines(prev => {
                          prev[connectionLineId] = {
                            endNodeRef: ref,
                            ...(prev[connectionLineId] ?? {}),
                          }
                          return prev
                        })
                      }
                    }}
                    setEndNodeRef={ref => {
                      if (
                        connectionLines[equationDetails.id]?.endNodeRef !== ref
                      ) {
                        setConnectionLines(prev => {
                          prev[equationDetails.id] = {
                            startNodeRef: ref,
                            ...(prev[equationDetails.id] ?? {}),
                          }
                          return prev
                        })
                      }
                    }}
                  />
                </>
              )
            })}
            {Object.keys(connectionLines).map(key => {
              const line = connectionLines[key as unknown as number]
              return (
                <ConnectionLine
                  startNodeRef={line?.startNodeRef}
                  endNodeRef={line?.endNodeRef}
                />
              )
            })}
          </Box>
          <OutputBox
            value={finalValue}
            stylesObject={{ position: 'absolute' }}
            // @ts-ignore
            ref={outputBoxRef}
            setCircleRef={ref =>
              setConnectionLines(prev => {
                const connectionLineId =
                  equations.find(eq => eq.final)?.id ?? -1
                prev[connectionLineId] = {
                  endNodeRef: ref,
                  ...(prev[connectionLineId] ?? {}),
                }
                return prev
              })
            }
          />
        </Box>
      </Background>
    </Box>
  )
})
