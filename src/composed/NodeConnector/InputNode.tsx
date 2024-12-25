import { CircleNode } from '../NodeConnector'
import { Box, Typography } from '../../components'
import React from 'react'

interface InputNodeProps {
  setRef: (ref: React.RefObject<HTMLDivElement> | null) => void
}

export const InputNode = React.forwardRef<
  React.RefObject<HTMLDivElement>,
  InputNodeProps
>(({ setRef }, ref) => {
  return (
    <Box
      stylesObject={{ display: 'flex', alignItems: 'center', gap: 4 }}
      ref={ref}
    >
      <CircleNode
        ref={ref => {
          setRef({ current: ref })
        }}
      />
      <Typography>input</Typography>
    </Box>
  )
})
