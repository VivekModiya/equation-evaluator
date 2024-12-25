import { stylesFunction } from '../../tokens'
import { InputField, InputFieldProps } from '../InputField'

export interface DisabledSelectMenuProps extends InputFieldProps {}

export const SelectMenu = (props: DisabledSelectMenuProps) => {
  return (
    // @ts-ignore
    <InputField
      {...props}
      classes={{
        wrapper: stylesFunction({ bgColor: 'neutral-200', textWeight: 'demi' }),
      }}
    />
  )
}
