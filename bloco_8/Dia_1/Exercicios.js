// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   }
//   return employees;
// };

// function pessoaContratada(nome) {
//   const cadastro = {
//     nomeCompleto: nome,
//     email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com`,
//   };
//   return cadastro;
// }
// console.log(newEmployees(pessoaContratada));

const result = (bet, callback) => {
  let draw = Math.round(Math.random() * 4 + 1); 
  console.log(draw);
  if (callback (draw, bet)) {
    return "Parabéns você ganhou";
  }
  else {
    return "Tente novamente";
  }
};

function check(num1, num2) {
  if (num1 === num2) {
    return true;
  }
  else {
    return false;
  }
}

console.log(result(4, check));