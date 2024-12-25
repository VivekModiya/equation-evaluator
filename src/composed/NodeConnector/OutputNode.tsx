import { CircleNode } from './CircleNode'
import { Box, Typography } from '../../components'

export const OutputNode = () => {
  return (
    <Box stylesObject={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Typography>output</Typography>
      <CircleNode />
    </Box>
  )
}
