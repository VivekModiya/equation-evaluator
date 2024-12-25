import React from 'react'
import { stylesFunction, StylesFunctionProps } from '../../tokens'
import { joinClassNames } from '../../utils/joinClassNames'
import { Box, BoxProps } from '../Box'
import { Typography } from '../Typography'
import styles from './index.module.scss'

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {}

export interface InputFieldProps extends BoxProps {
  label?: React.ReactNode
  value?: string | number
  disabled?: boolean
  fullWidth?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  inputProps?: InputProps
  className?: string
  error?: boolean
  helperText?: string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  placeholder?: string
  classes?: {
    root?: string
    wrapper?: string
    inputContainer?: string
    input?: string
    helperText?: string
  }
  stylesObject?: StylesFunctionProps
  align?: 'left' | 'right'
}

export const InputField = React.forwardRef<
  React.RefObject<HTMLDivElement>,
  InputFieldProps
>((props: InputFieldProps, ref) => {
  const {
    label = '',
    fullWidth = false,
    inputProps = {},
    disabled = false,
    onChange,
    value = '',
    error = false,
    helperText = '',
    align = 'left',
    startAdornment,
    endAdornment,
    placeholder,
    stylesObject,
    classes,
    ...other
  } = props

  return (
    <Box
      className={joinClassNames(
        fullWidth ? stylesFunction({ width: 100 }) : '',
        disabled ? styles.disabled : '',
        classes?.root,
        stylesFunction(stylesObject)
      )}
      {...other}
      ref={ref}
    >
      {label && (
        <Typography Component="p" className={stylesFunction({ mb: 4 })}>
          {label ?? ''}
        </Typography>
      )}
      <div
        className={joinClassNames(
          stylesFunction({
            pl: startAdornment ? 12 : 0,
            pr: endAdornment ? 12 : 0,
            border: 1,
            fontSize: 14,
            borderRadius: 8,
            borderColor: 'neutral-400',
            display: 'flex',
            alignItems: 'center',
            bgColor: 'neutral-0',
          }),
          classes?.wrapper
        )}
      >
        {startAdornment && startAdornment}
        <div
          className={joinClassNames(
            stylesFunction({
              py: 8,
              pl: startAdornment ? 8 : 12,
              pr: endAdornment ? 8 : 12,
            }),
            classes?.inputContainer
          )}
        >
          <input
            defaultValue={value}
            value={value}
            className={joinClassNames(
              classes?.input,
              styles.input,
              align === 'right' ? styles.alignRight : null
            )}
            disabled={disabled}
            onChange={disabled === false ? onChange : () => null}
            placeholder={placeholder}
            {...inputProps}
          />
        </div>
        {endAdornment && endAdornment}
      </div>
      {helperText && (
        <Typography
          className={joinClassNames(
            stylesFunction({
              textColor: error ? 'error-400' : 'neutral-1000',
              fontSize: 12,
            }),
            classes?.helperText
          )}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  )
})
