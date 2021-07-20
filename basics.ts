function add (n1: number, n2: number, showResult: boolean, resultPhrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }  
}

const num1 = 5;
const num2 = 5.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(num1, num2, printResult, resultPhrase);