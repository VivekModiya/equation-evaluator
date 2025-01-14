import React from 'react'

import styles from './index.module.scss'
import { joinClassNames } from '../../utils'
import { CircleNode } from '../NodeConnector'
import { stylesFunction } from '../../tokens'
import { Box, InputField, InputFieldProps, Typography } from '../../components'

export interface InputBoxProps extends InputFieldProps {
  setCircleRef?: (ref: React.RefObject<HTMLDivElement>) => void
}

export const OutputBox = React.forwardRef<
  React.RefObject<HTMLDivElement>,
  InputBoxProps
>((props: InputBoxProps, ref) => {
  const { classes: _, setCircleRef, ...other } = props
  return (
    <InputField
      startAdornment={
        <Box
          stylesObject={{
            borderRight: 1,
            height: 100,
            py: 16,
            pr: 12,
            borderColor: 'success-200',
          }}
        >
          <CircleNode ref={ref => setCircleRef?.({ current: ref })} />
        </Box>
      }
      // @ts-ignore
      ref={ref}
      classes={{
        wrapper: stylesFunction({
          border: 1,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: 'success-400',
          maxWidth: 'fit-content',
          bgColor: 'neutral-0',
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
            bgColor: 'success-400',
          }}
          weight="demi"
          color="neutral-0"
        >
          Final Output y
        </Typography>
      }
      align="right"
      // inputProps={{ readOnly: true }}
      {...other}
    />
  )
})
