//Escreva uma função que dado um valor numérico retorne se o valor é par.

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'esse valor é par'
  }
  return 'esse valor é impar'
};

// ou utilizando ternário

// const isEven = (number) => number % 2 === 0;