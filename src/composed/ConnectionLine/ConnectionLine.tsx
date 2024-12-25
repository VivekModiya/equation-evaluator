import React from 'react'
import { getCurvePath } from '../../utils/getCurvePath'
import { getCubicBezierPath } from '../../utils/getCubicBezierPath'

export interface ConnectionLineProps {
  startNodeRef?: React.RefObject<HTMLDivElement> | null
  endNodeRef?: React.RefObject<HTMLDivElement> | null
}

export const ConnectionLine = React.memo((props: ConnectionLineProps) => {
  const { startNodeRef, endNodeRef } = props

  const getPath = () => {
    const startRect = startNodeRef?.current?.getBoundingClientRect()
    const endRect = endNodeRef?.current?.getBoundingClientRect()

    const verticalDiff = (startRect?.top ?? 0) - (endRect?.top ?? 0)
    const horizontalDiff = (startRect?.left ?? 0) - (endRect?.left ?? 0)

    const isHorizontallyAligned = Math.abs(verticalDiff) < 50
    const isVerticallyAligned = Math.abs(horizontalDiff) < 50

    const connectionLineType =
      isVerticallyAligned || isHorizontallyAligned ? 'curve' : 'bazier'

    if (connectionLineType === 'curve') {
      return (
        getCurvePath({
          startNodeRef,
          endNodeRef,
          direction: isVerticallyAligned ? 'x' : 'y',
          strength: isVerticallyAligned ? verticalDiff / 3 : horizontalDiff / 3,
        }) ?? ''
      )
    } else if (connectionLineType === 'bazier') {
      return (
        getCubicBezierPath({
          startNodeRef,
          endNodeRef,
          direction: verticalDiff < 0 ? 'ltr' : 'rtl',
        }) ?? ''
      )
    }
    return ''
  }

  const [dPath, setDPath] = React.useState(getPath())

  React.useEffect(() => {
    const handler = () => setDPath(getPath)
    window.addEventListener('resize', handler)
  }, [startNodeRef, endNodeRef])

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        zIndex: '1',
      }}
    >
      <path
        d={dPath}
        stroke="var(--primary-300)"
        opacity={0.6}
        strokeWidth={8}
        fill="transparent"
      />
    </svg>
  )
})
