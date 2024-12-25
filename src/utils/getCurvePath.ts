import React from 'react'

interface GetCurvePathParams {
  startNodeRef?: React.RefObject<HTMLDivElement> | null
  endNodeRef?: React.RefObject<HTMLDivElement> | null
  direction?: 'x' | 'y'
  strength?: number
}

export const getCurvePath = (params: GetCurvePathParams): string | null => {
  const { startNodeRef, endNodeRef, direction = 'y', strength = 100 } = params

  // Get bounding rectangles
  const startRect = startNodeRef?.current?.getBoundingClientRect()
  const endRect = endNodeRef?.current?.getBoundingClientRect()

  if (!startRect || !endRect) {
    console.warn('One or both of the node references are invalid.')
    return null
  }

  // Calculate start and end positions (center of nodes)
  const startX = startRect.left + startRect.width / 2
  const startY = startRect.top + startRect.height / 2
  const endX = endRect.left + endRect.width / 2
  const endY = endRect.top + endRect.height / 2

  let controlX
  let controlY

  if (direction === 'y') {
    controlX = (startX + endX) / 2
    controlY = Math.min(startY, endY) + strength
  } else {
    controlX = Math.min(startX, endX) + strength
    controlY = (startY + endY) / 2
  }

  // Calculate control point for a smooth curve

  // Generate the SVG path data for a cubic Bézier curve
  return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`
}
