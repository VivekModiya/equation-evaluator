import { stylesFunction } from '../../tokens'
import { ChevronDown, DotGridIcon } from '../../assets'
import { InputNode, OutputNode } from '../NodeConnector'
import {
  Box,
  InputField,
  Paper,
  SelectMenu,
  Typography,
} from '../../components'
import { isValidEquation } from '../../utils'
import React from 'react'

export interface FunctionCardProps {
  equation: string
  setEquation: (val: string) => void
  title: string
}

export const FunctionCard = (props: FunctionCardProps) => {
  const { title, equation, setEquation } = props

  const error = React.useMemo(
    () => isValidEquation(equation) === false,
    [equation]
  )
  const message = error ? 'Invalid equation' : ''

  return (
    <Paper
      stylesObject={{
        p: 24,
        gap: 24,
        display: 'flex',
        flexDirection: 'column',
        bgColor: 'neutral-0',
      }}
    >
      <Box
        stylesObject={{
          display: 'flex',
          alignItems: 'center',
          width: 100,
          gap: 8,
        }}
      >
        <DotGridIcon />
        <Typography fontSize={16} weight="demi" color="neutral-400">
          {title}
        </Typography>
      </Box>
      <InputField
        fullWidth
        label="Equation"
        value={equation}
        error
        helperText={message}
        onChange={e => setEquation(e.target.value)}
      />
      <SelectMenu
        fullWidth
        disabled
        label="Next function"
        placeholder="Function: 2"
        endAdornment={<ChevronDown />}
        classes={{ wrapper: stylesFunction({ bgColor: 'neutral-200' }) }}
      />
      <Box
        stylesObject={{
          display: 'flex',
          flexShrink: 0,
          alignItems: 'center',
          justifyContent: 'between',
          mt: 24,
        }}
      >
        <InputNode />
        <OutputNode />
      </Box>
    </Paper>
  )
}
