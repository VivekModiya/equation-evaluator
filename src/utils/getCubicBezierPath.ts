import React from 'react'

interface GetCubicBezierPath {
  startNodeRef?: React.RefObject<HTMLDivElement> | null
  endNodeRef?: React.RefObject<HTMLDivElement> | null
  direction?: 'ltr' | 'rtl'
}

export const getCubicBezierPath = (
  params: GetCubicBezierPath
): string | null => {
  const { startNodeRef, endNodeRef, direction = 'ltr' } = params

  // Get bounding rectangles
  const startRect = startNodeRef?.current?.getBoundingClientRect()
  const endRect = endNodeRef?.current?.getBoundingClientRect()

  if (!startRect || !endRect) {
    return ''
  }

  // Calculate start and end positions (center of nodes)
  const startX = startRect.left + startRect.width / 2
  const startY = startRect.top + startRect.height / 2
  const endX = endRect.left + endRect.width / 2
  const endY = endRect.top + endRect.height / 2

  // Calculate control points for an S-shaped curve
  // The control points are offset along the x and y axes to create the "S" shape

  const controlX1 = (startX + endX) / 2 + (direction === 'ltr' ? 120 : -120)
  const controlY1 = endY - (direction === 'ltr' ? 150 : -150) // Control point 2 is below the ending point

  const controlX2 = (startX + endX) / 2 - (direction === 'ltr' ? 120 : -120)
  const controlY2 = startY + (direction === 'ltr' ? 150 : -150) // Control point 1 is above the starting point

  // Generate the SVG path data for a quadratic Bézier curve (S-shaped)
  return `M ${startX} ${startY} C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${endX} ${endY}`
}
