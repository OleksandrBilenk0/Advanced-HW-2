
let N;
let M;

do {
  N = Number(prompt("Введіть ДОДАТНЕ, ЦІЛЕ число (N)"));
} while (N < 0 || N !== Math.floor(N));
do {
  M = Number(prompt("Введіть ДОДАТНЕ, ЦІЛЕ число (M), має бути > (N)"));
} while (
  M < 0 || M !== Math.floor(M) || N > M
);

const evenNumber = confirm("OK - щоб пропускати парні числа");

let finalValue = 0;

for (let i = N; i <= M; i++) {
  if (evenNumber == true && i % 2 !== 0) {
    finalValue += i;
  } else if (evenNumber == false) {
    finalValue += i;
  }
}

document.writeln("Початкове число: " + N);
document.writeln("<br>")
document.writeln("Число до якого (включно) йде розрахунок: " + M);
document.writeln("<br>")
document.writeln("true - без парних / false - з парними: " + evenNumber)
document.writeln("<br>")
document.writeln("Результат розрахунку = " + (finalValue));
