import React from 'react'
import { Button, Container, Grid } from '@mui/material'
import { CalculatorView } from '../../components'
import { useCalculatorStack } from '../../hooks'

const useInputs = (setInput:(displayInput:string, input: string) => void) => {
  const size = 60
  const style ={height: size,  width: size, margin: "0", fontSize:"20px", minWidth: 0, padding: 5,
  boxShadow:  "9px 9px 18px #e2e2e2, -9px -9px 18px #fefefe", borderRadius: 20
} 

const handleInput = (displayInput: string, input: string) => {
  setInput(displayInput, input)
} 
  const createNumbers = () => {
    const calculatorMap = ["%", "CE", "AC", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "-/+", 0, ".", "="]
    const numbers = calculatorMap.map((sym: string | number, i) => {
      if(sym === "=") {
        return( 
        <Grid item xs={1} key={i}>
          <Button variant="contained" style={{...style, backgroundColor: "#A160FB", color: "white"}}
            onClick={() => {handleInput("=", sym)}}>{sym}</Button>
        </Grid>)
        } 
      if(sym === ".") {
        return( 
        <Grid item xs={1} key={i}>
          <Button variant="contained" style={{...style, backgroundColor: "#F0F0F0", color: "#7F7F7F"}}
            onClick={() => {handleInput(sym, sym)}}>{sym}</Button>
        </Grid>)
        } 
        else if(isNaN(Number(sym))) {
          return(<Grid item xs={1} key={i}>
            <Button variant="contained" style={{...style, backgroundColor: "#F0F0F0", color: "#7F7F7F"}}
            onClick={() => {handleInput("", sym.toString())} }>{sym}</Button>
          </Grid>)}
        else 
        {
          return(<Grid item xs={1} key={i}>
            <Button variant="contained" style={{...style, backgroundColor: "#F0F0F0", color: "#515151"}}
            onClick={() => {handleInput(sym.toString(), sym.toString())} }>{sym}</Button>
          </Grid>)}
  })
    return numbers
  }

  return {
    createNumbers
  } as const
}


const CalculatorGrid: React.FC = () => {
  const {expression, setInput, display} = useCalculatorStack()
  const { createNumbers } = useInputs(setInput)

  return (
    <>
    <Container style={{
      maxWidth: '300px',
      backgroundColor: '#F0F0F0',
      borderRadius: 30, 
      padding: 0,
    }}
    > 
        <CalculatorView expression={expression} 
        display={display}
        />

        <Grid container spacing={2} columns={{xs: 4}} style={{padding: "20px", paddingBottom: 30, maxWidth:"300px", minWidth: 0}}>
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
