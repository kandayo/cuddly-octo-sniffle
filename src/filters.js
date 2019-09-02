const pluralize = (word, plural, amount) => amount > 1 ? plural : word

const reais = value => {
  return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

export {
  pluralize,
  reais
}
