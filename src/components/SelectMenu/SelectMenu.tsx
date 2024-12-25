import { InputField, InputFieldProps } from '../InputField'

export interface DisabledSelectMenuProps extends InputFieldProps {}

export const SelectMenu = (props: DisabledSelectMenuProps) => {
  return <InputField {...props} />
}
