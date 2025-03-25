import { camelCase } from '.'

export interface IFilteredAttributes {
  [key: string]: string | object
}

export function attrs(attributes: NamedNodeMap): any {
  const filteredAttributes: IFilteredAttributes = {}

  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes.item(i)
    if (attribute?.name) {
      filteredAttributes[attribute.name] = attribute.value
    }
  }
  return filteredAttributes
}

export function filterAttributes(
  attributes: NamedNodeMap,
): IFilteredAttributes {
  const filteredAttributes: IFilteredAttributes = {}

  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i]
    if (attribute.name !== 'class' && !attribute.name.includes('data')) {
      filteredAttributes[attribute.name] = attribute.value
    }
  }
  return filteredAttributes
}

export function camelCasedProps(attributes: NamedNodeMap): IFilteredAttributes {
  const camelCasedProps: IFilteredAttributes = {}

  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i]
    if (attribute.name !== 'class') {
      camelCasedProps[attribute.name] = camelCase(attribute.value)
    }
  }
  return camelCasedProps
}
