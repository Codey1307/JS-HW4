let operation = prompt("Введіть операцію (+, - , *, /):")
let firstNum = +prompt("Введіть перше число:")
let secondNum = +prompt("Введіть друге число:")

switch (operation) {
    case "+":
      alert(`Операція: додавання. Результат: ${result = firstNum + secondNum} `)
        break;
        case "-":
            alert(`Операція: віднімання. Результат: ${result = firstNum - secondNum} `)
        break;
        case "*":
            alert(`Операція: множення . Результат: ${result = firstNum * secondNum} `)
        break;
        case "/":
            alert(`Операція: ділення. Результат: ${result = firstNum / secondNum} `)
        break;
    default:
        alert("Операція невідома ")
        break;
}




