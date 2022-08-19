import React from 'react'
import { Button, Grid } from '@mui/material'

const useInputs = () => {
  const createNumbers = () => {
    const calculatorMap = ["%", "CE", "AC", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", " ", 0, ".", "="]
    const numbers = []
    for (let i of calculatorMap) {
      numbers.push(
        <Grid item xs={1} key={i}>
          <Button variant="contained" color="primary">{i}</Button>
        </Grid>
      )
    }
    return numbers
  }
  return {
    createNumbers
  } as const
}


const CalculatorInput: React.FC = () => {
  return (
    <>
    <Button>+</Button>
    </>
  )
}

const CalculatorGrid: React.FC = () => {
  const { createNumbers } = useInputs()
  return (
    <>
    <Grid container spacing={2} justifyItems='center' columns={{xs: 4}} >
     {createNumbers()}
    </Grid>
    </>
  )
}


const Calculator: React.FC = () => {
  return (
   <CalculatorGrid/>
  )
}

export default Calculator
