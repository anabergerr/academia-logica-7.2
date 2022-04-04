//Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.


const isNumber = (value) => {
  if (typeof value === 'number') {
    return true
  }
  return false;
}

// ou podemos utilizar ternário! Como a expressão typeof value === 'number' já nos retorna true =)

// const isNumber = (value) => typeof value === 'number';