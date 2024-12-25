import { CircleNode } from './CircleNode'
import { Box, Typography } from '../../components'
import React from 'react'

interface OutputNodeProps {
  setRef: (ref: React.RefObject<HTMLDivElement> | null) => void
}

export const OutputNode = React.forwardRef<
  React.RefObject<HTMLDivElement>,
  OutputNodeProps
>(({ setRef }, ref) => {
  return (
    <Box
      stylesObject={{ display: 'flex', alignItems: 'center', gap: 4 }}
      ref={ref}
    >
      <Typography>output</Typography>
      <CircleNode
        ref={ref => {
          setRef({ current: ref })
        }}
      />
    </Box>
  )
})
