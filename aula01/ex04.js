// Salário + 25%

let sal, novosal;

sal = 1500;

novosal = sal + sal * 25/100;
novosal = sal * 1.25;
novosal = sal * (1 + 0.25);

var psal = sal * 0.25;
console.log(psal);

novosal = sal + psal;
console.log(novosal);
