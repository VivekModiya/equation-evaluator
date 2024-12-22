export interface InputFieldProps {
  /**
   * Label to display next to the input field.
   * Can be a string or any valid React node (e.g., JSX, elements, etc.)
   * @default ''
   */
  label?: React.ReactNode
  /**
   * The current value of the input field.
   * If not provided, the input will be uncontrolled.
   */
  value?: string
  /**
   * Prop to change the size of the input field
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * If true, input field will take full width
   * @default false
   */
  fullWidth?: boolean
  /**
   * If true, input field will become unresponsive
   * @default false
   */
  disabled?: boolean
  /**
   * Callback function that is triggered when the input value changes.
   * This function will receive the change event as an argument.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  /**
   * Additional properties to pass to the underlying <input> element.
   * This allows customization of native input attributes like `placeholder`, `maxLength`, etc.
   * The 'size' prop is excluded to prevent conflicts with the `size` prop defined in this component.
   */
  inputProps?: Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  >
  /**
   * Determines the color scheme of the input field.
   * Can be 'primary', 'secondary', 'success', or 'error'.
   * This will control the input's border and focus color.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error'
  /**
   * An optional CSS class to apply to the input field.
   * Use this prop to add custom styling or additional classes.
   */
  className?: string
  /**
   * If true, applies an error state to the input field.
   * This can be used to highlight validation errors or other issues with the input.
   * @default false
   */
  error?: boolean
  /**
   * A helper text displayed below the input field.
   * Can be used to provide additional guidance or information to the user.
   * Typically used in combination with the 'error' state for validation messages.
   */
  helperText?: string
  /**
   * An optional element to display at the start of the input field.
   * Common use cases include icons or buttons (e.g., a search icon or a clear button).
   */
  startAdornment?: React.ReactNode
  /**
   * An optional element to display at the end of the input field.
   * Common use cases include icons or buttons (e.g., a clear button, or a password visibility toggle).
   */
  endAdornment?: React.ReactNode
}
import { joinClassNames } from '../../utils/joinClassNames'
import styles from './index.module.scss'

export const InputField = (props: InputFieldProps) => {
  const {
    size = 'medium',
    label = '',
    className,
    fullWidth = false,
    inputProps = {},
    disabled = false,
    onChange,
    value = '',
    color = 'primary',
    error = false,
    helperText = '',
    startAdornment,
    endAdornment,
  } = props

  const rootClassName = joinClassNames(
    styles.root,
    styles[`size_${size}`],
    styles[`color_${error ? 'error' : color}`],
    fullWidth ? styles.full_width : null,
    disabled ? styles.disabled : null,
    className
  )

  const wrapperClassName = joinClassNames(
    styles[`border_outlined`],
    styles.inputFieldWrapper
  )

  const _onChange = disabled === false ? onChange : () => null

  return (
    <div className={rootClassName}>
      {label && <label className={styles.label}>{label}</label>}{' '}
      <div className={wrapperClassName}>
        {startAdornment && startAdornment}
        <input
          value={value}
          className={styles.input}
          disabled={disabled}
          onChange={_onChange}
          {...inputProps}
        />
        {endAdornment && endAdornment}
      </div>
      {helperText && (
        <p className={error ? styles.helperTextColorError : ''}>{helperText}</p>
      )}
    </div>
  )
}
