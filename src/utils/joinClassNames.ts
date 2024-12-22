export const joinClassNames = (
  ...classNames: (string | undefined | null | boolean)[]
): string => {
  return classNames.filter(Boolean).join(' ')
}
