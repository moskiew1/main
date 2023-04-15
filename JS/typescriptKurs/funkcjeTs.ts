function addition(firstNumber: number | string = 0, secondNumber: number | string = 0) {
    return Number(firstNumber) + Number(secondNumber);  // number = 0 in function if we dont write number in function autmatically will take 0;
}

const result = addition(2) // ts will be now result is a type number and second variable will be 0 


console.log(result);