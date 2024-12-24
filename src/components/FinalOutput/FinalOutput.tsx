import { Circle } from '../../feature/Card'
import { InputField, InputFieldProps } from '../InputField'
import { Typography } from '../Typography'
import styles from './index.module.scss'

export interface FinalOutputProps extends InputFieldProps {}

export const FinalOutput = (props: FinalOutputProps) => {
  return (
    <InputField
      size="large"
      startAdornment={<Circle />}
      classes={{
        wrapper: styles.inputFieldWrapper,
        root: styles.root,
        input: styles.input,
      }}
      label={
        <Typography Component="p" className={styles.label} weight="demi">
          Final Output y
        </Typography>
      }
      {...props}
    />
  )
}
