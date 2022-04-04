// Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares.
//Se nenhum número for par, ou o array for vazio a soma deve ser zero.

const isEven = (number) => number % 2 === 0;
const sumEven = (array) => {
  let sum = 0;
  for (const val of array) {
    if (isEven(val)) {
      sum += val;
    }
  }
  return sum;
};