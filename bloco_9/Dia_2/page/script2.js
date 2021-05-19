const promise = new Promise((resolve, reject) => {
  const array = [];
  for (let i = 0; i < 10; i += 1){
    let number = Math.floor(Math.random() * 49 + 1);
    array.push(number);
  }
  
  array.reduce((acc, cur) => {
    return acc = array[i] * array[i] + acc;
  })
  if (acc > 8000) {
    return reject(acc);
  }
  resolve(acc);
})
.then(acc => console.log(`Promise resolvida: ${acc}`))
.catch(acc => console.log(`Promise rejeitada: ${acc}`));