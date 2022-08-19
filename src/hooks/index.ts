import React from 'react'
import { CalculatorExpression } from '../types'

export const useCalculatorStack = () => {
  const [expression , setExpression] = React.useState<CalculatorExpression>({
    answer: "",
    firstInput: "",
    secondInput: "",
    operator: ""
  } as CalculatorExpression);
  const [stack, setStack] = React.useState<CalculatorExpression[]>([]);
 
  const setInput = (input: string) => {
    setExpression({...expression, answer: input})
  }
  return {
    expression,
    setInput
  } as const
}
  