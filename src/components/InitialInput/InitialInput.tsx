import styles from './index.module.scss'
import { Typography } from '../Typography'
import { Circle } from '../../feature/Card/Circle'
import { InputField, InputFieldProps } from '../InputField'

export interface InitialInputProps extends InputFieldProps {}

export const InitialInput = (props: InitialInputProps) => {
  return (
    <InputField
      size="large"
      endAdornment={
        <div style={{ borderLeft: '1px solid black', height: '100%' }}>
          <Circle />
        </div>
      }
      classes={{
        wrapper: styles.inputFieldWrapper,
        root: styles.root,
        input: styles.input,
      }}
      label={
        <Typography Component="p" className={styles.label} weight="demi">
          Initial value of x
        </Typography>
      }
      {...props}
    />
  )
}
