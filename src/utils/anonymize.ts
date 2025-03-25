export function anonymize(name: string) {
  const names: string[] = name.toUpperCase().split(/[\s_-]+/) // space and underscore
  if (names.length > 0) {
    names.forEach((element: string, index) => {
      names[index] = `${element.charAt(0)}.`
    })
    return names.join(' ')
  }
  return ''
}
