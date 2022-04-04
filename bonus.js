//Escreva uma função que, dado um array, verifique se todos os valores são iguais. 
//Valide que o tipo de entrada seja array e que o tamanho seja maior que 1.

const allEqual = (array) => {
  if (!Array.isArray(array) || array.length <= 1) {
    return "Parâmetro inválido."
  }
  for (let value of array) {
    if (value !== array[0]) {
      return false;
    }
  }
  return true;
};