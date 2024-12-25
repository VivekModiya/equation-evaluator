import { CircleNode } from '../NodeConnector'
import { Box, Typography } from '../../components'

export const InputNode = () => {
  return (
    <Box stylesObject={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <CircleNode />
      <Typography>input</Typography>
    </Box>
  )
}
