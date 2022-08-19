import React from 'react'
import { Button, Container, Grid } from '@mui/material'
import CalculatorView from '../../components/calculator-view'

const useInputs = () => {
  const createNumbers = () => {
    const calculatorMap = ["%", "CE", "AC", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", " ", 0, ".", "="]
    const numbers = calculatorMap.map((sym: string | number, i) => {
      if(sym === "=") {
        return( 
        <Grid item xs={1} key={i}>
          <Button variant="contained" style={{height: 55, margin: "0", backgroundColor: "#A160FB", color: "white", fontSize:"30px"}}>{sym}</Button>
        </Grid>)
        }
        else if(isNaN(sym as number)) {
          return(<Grid item xs={1} key={i}>
            <Button variant="contained" style={{height: 55, margin: "0", backgroundColor: "#F0F0F0", color: "#7F7F7F", fontSize:"30px"}}>{sym}</Button>
          </Grid>)}
        else 
        {
          return(<Grid item xs={1} key={i}>
            <Button variant="contained" style={{height: 55, margin: "0", backgroundColor: "#F0F0F0", color: "#515151", fontSize:"30px"}}>{sym}</Button>
          </Grid>)}
  })
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
    <Container maxWidth="xs" style={{backgroundColor: '#F0F0F0', borderRadius: 10}}> 
    <CalculatorView expression={{
      answer: "",
      firstInput: "",
      secondInput: "",
      operator: "",
    }}/>
    <Grid container spacing={2} justifyItems='center' columns={{xs: 4}} style={{padding: "40px"}}>
     {createNumbers()}
    </Grid>
    </Container>
    </>
  )
}


const Calculator: React.FC = () => {
  return (
   <CalculatorGrid/>
  )
}

export default Calculator
