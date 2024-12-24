import { InputField, InputFieldProps } from '../InputField'
import { ChevronDown } from '../../assets/ChevronDown'
import styles from './index.module.scss'

export interface DisabledSelectMenuProps extends InputFieldProps {}

export const DisabledSelectMenu = (props: DisabledSelectMenuProps) => {
  return (
    <InputField
      {...props}
      disabled
      endAdornment={<ChevronDown />}
      classes={{ wrapper: styles.root }}
    />
  )
}
