import React from 'react'
import { CalculatorExpression } from '../types'

export const useCalculatorStack = () => {
  const [display, setDisplay] = React.useState("");
  const [expression , setExpression] = React.useState<CalculatorExpression>({
    answer: "",
    firstInput: "",
    secondInput: "",
    operator: ""
  } as CalculatorExpression);
  const [stack, setStack] = React.useState<CalculatorExpression[]>([]);

  const evaluate = (expression: CalculatorExpression) => {
    const { firstInput, secondInput, operator } = expression;
    let answer = "";
    console.log('Operator', operator);
    switch (operator) {
      case "+":
        answer = (parseFloat(firstInput) + parseFloat(secondInput)).toString();
        break;
      case "-":
        answer = (parseFloat(firstInput) - parseFloat(secondInput)).toString();
        break;
      case "*":
        answer = (parseFloat(firstInput) * parseFloat(secondInput)).toString();
        break;
      case "/":
        answer = (parseFloat(firstInput) / parseFloat(secondInput)).toString();
        if (secondInput === '0') {
          answer = "0";
          return('Cannot Divide by zero')
        }
        break;
      default:
        console.log('Nothing')
    }
    return answer;
  }
 
  React.useEffect(() => {
    console.log(expression)
  }, [expression])

  const setInput = (displayInput: string, input: string) => {
    if(input === "AC"){
      setExpression({ ...expression, firstInput: "", secondInput: "", operator: "" });
      setDisplay("");
      return
    } else if(input === "CE"){
      (expression.firstInput !== "" && expression.operator === "") && setExpression({ ...expression, firstInput:"" });
      expression.secondInput !== "" && setExpression({ ...expression, secondInput:"" });
      setDisplay("");
      return
    } else if (input === "-/+") {
      if (expression.secondInput !== "") {
       setExpression({ ...expression, secondInput: expression.secondInput.charAt(0) === "-" ? expression.secondInput.slice(1) : "-" + expression.secondInput });
       setDisplay(expression.secondInput);
     }
     else
      if (expression.firstInput !== "") {
        setExpression({ ...expression, firstInput: expression.firstInput.charAt(0) === "-" ? expression.firstInput.slice(1) : "-" + expression.firstInput });
        setDisplay(expression.firstInput);
      } 
      return
    } else if (input === "+" || input === "-" || input === "*" || input === "/") {
      if(expression.firstInput === "") {
       return 
      }
      else if (expression.operator === "" || expression.secondInput === "")
        setExpression({ ...expression, operator: input });
      else if (expression.secondInput === "" && expression.operator !== "")
        setExpression({ ...expression, operator: input });
      else if (expression.secondInput === "") {
        setStack([...stack, expression]);
        setExpression({ ...expression, firstInput:expression.answer , secondInput: "", operator: input, answer: "" });
      } else {
        setStack([...stack, expression]);
        setExpression({ ...expression, firstInput: evaluate(expression), secondInput: "", operator: input, answer: "" });
      }
    } else if (input === "%") {
      expression.answer !== "" && setExpression({ ...expression, answer: (Number (expression.secondInput)/100).toString() });
      (expression.firstInput !== "" && expression.operator === "") && setExpression({ ...expression, firstInput:(Number (expression.firstInput)/100).toString() });
      expression.secondInput !== "" && setExpression({ ...expression, secondInput: (Number (expression.secondInput)/100).toString() });

    } 
    else if (input === "=") {
      if (expression.answer !== "") {
        setExpression({ ...expression, firstInput: expression.answer });
      }
      setExpression({ ...expression, answer: evaluate(expression) });
      setStack([...stack, expression]);
      setDisplay(evaluate(expression));
      return
    } else {
      if (!expression.operator) {
        setExpression({ ...expression, firstInput: expression.firstInput + input });
      } else {
        setExpression({ ...expression, secondInput: expression.secondInput + input });
      } 
      return
    }
  }
  return {
    expression,
    setInput,
    display,
    setDisplay
  } as const
}
  