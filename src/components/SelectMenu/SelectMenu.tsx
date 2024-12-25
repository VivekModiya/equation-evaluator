import { InputField, InputFieldProps } from '../InputField'

export interface DisabledSelectMenuProps extends InputFieldProps {}

export const SelectMenu = (props: DisabledSelectMenuProps) => {
  // @ts-ignore
  return <InputField {...props} />
}
