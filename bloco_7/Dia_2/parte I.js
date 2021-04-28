// 
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// // newKey = 'fullName';
// // const fullName = `${customer.firstName} ${customer.lastName}`;
// // customer[newKey] = fullName;
// console.log(customer);

function teste (objeto, chave, valor) {
  objeto[chave] = valor;

  return objeto;
}

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  let newKey = 'birthDate';

console.log(Object.keys(customer));