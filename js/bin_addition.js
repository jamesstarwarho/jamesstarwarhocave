export function add() {
    let invalid = "Invalid number entered!";
    let num1 = parseInt(prompt("Enter number 1:"), 2);
    if (isNaN(num1))
        return invalid;

    let num2 = parseInt(prompt("Enter number 2:"), 2);
    if (isNaN(num2))
        return invalid;

    return((num1 + num2).toString(2));
}