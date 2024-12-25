import React from 'react'
import { getCurvePath } from '../../utils/getCurvePath'
import { getCubicBezierPath } from '../../utils/getCubicBezierPath'

export interface ConnectionLineProps {
  startNodeRef?: React.RefObject<HTMLDivElement> | null
  endNodeRef?: React.RefObject<HTMLDivElement> | null
}

export const ConnectionLine = React.memo((props: ConnectionLineProps) => {
  const { startNodeRef, endNodeRef } = props

  const startRect = startNodeRef?.current?.getBoundingClientRect()
  const endRect = endNodeRef?.current?.getBoundingClientRect()

  const verticalDiff = Math.abs((startRect?.top ?? 0) - (endRect?.top ?? 0))
  const horizontalDiff = Math.abs((startRect?.left ?? 0) - (endRect?.left ?? 0))

  const isHorizontallyAligned = verticalDiff < 50
  const isVerticallyAligned = horizontalDiff < 50

  const connectionLineType =
    isVerticallyAligned || isHorizontallyAligned ? 'curve' : 'bazier'

  const dPath = React.useMemo(() => {
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
      return getCubicBezierPath({ startNodeRef, endNodeRef }) ?? ''
    }
    return ''
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
