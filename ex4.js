//Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem:
// "Boas vindas, USERNAME". 
// Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter.

const greetings = (username) => {
  if (typeof username !== 'string') {
    return "O parâmetro username deve ser do tipo texto!";
  } else if (username.length < 1) {
    return "O parâmetro username deve conter pelo menos um caracter!";
  }
  return `Boas vindas, ${username}!`;
};  