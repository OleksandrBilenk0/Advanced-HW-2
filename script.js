let finalValue = 0;

N = Number(prompt("Введіть початкове ЦІЛЕ число"));
document.writeln("Початкове число: " + N);
document.writeln("<br>")
M = Number(prompt("Введіть ЦІЛЕ число до якого будемо рахувати"));
document.writeln("Число до якого (включно) йде розрахунок: " + M);
document.writeln("<br>")
evenNumbers = confirm("OK - щоб пропускати парні числа");
document.writeln("true - без парних / false - з парними: " + evenNumbers)
document.writeln("<br>")

let a = !Number.isInteger(N) || !Number.isInteger(M) ? (alert("Не уважно читаєш - числа мають бути ЦІЛИМИ!")) : (alert("Все введено вірно"));

for (let i = N ; i < (M  + 1) ; i++ ){
    if (evenNumbers)
    { i % 2 ? finalValue += i : finalValue; }
    else { finalValue += i; }
};

document.writeln("Результат розрахунку = " + (finalValue));