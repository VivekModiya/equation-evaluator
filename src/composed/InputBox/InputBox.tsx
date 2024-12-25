import { CircleNode } from '../NodeConnector'
import { Box, InputField, InputFieldProps, Typography } from '../../components'
import { stylesFunction } from '../../tokens'
import { joinClassNames } from '../../utils'
import styles from './index.module.scss'
import React from 'react'

export interface InputBoxProps extends InputFieldProps {
  setCircleRef?: (ref: React.RefObject<HTMLDivElement>) => void
}

export const InputBox = React.forwardRef<
  React.RefObject<HTMLDivElement>,
  InputBoxProps
>(({ ...props }, ref) => {
  const { setCircleRef, ...other } = props
  return (
    <InputField
      ref={ref}
      endAdornment={
        <Box
          stylesObject={{
            borderLeft: 1,
            height: 100,
            py: 16,
            pl: 12,
            borderColor: 'warning-100',
          }}
        >
          <CircleNode ref={ref => setCircleRef?.({ current: ref })} />
        </Box>
      }
      classes={{
        wrapper: stylesFunction({
          border: 1,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: 'warning-100',
        }),
        root: joinClassNames(
          stylesFunction({
            m: 8,
            alignSelf: 'end',
          }),
          styles.root
        ),
        input: stylesFunction({
          textWeight: 'bold',
          fontSize: 16,
        }),
      }}
      label={
        <Typography
          Component="p"
          stylesObject={{
            py: 4,
            mb: 2,
            px: 12,
            borderRadius: 'pill',
            display: 'inline-block',
            bgColor: 'warning-300',
          }}
          weight="demi"
          color="neutral-0"
        >
          Initial value of x
        </Typography>
      }
      {...other}
    />
  )
})
