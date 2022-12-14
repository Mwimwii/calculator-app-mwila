import { Container, Typography, Grid } from '@mui/material'
import React from 'react'
import { CalculatorExpression } from '../../types'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

interface CalculatorViewProps {
  expression: CalculatorExpression
  display: string
}

const CalculatorView: React.FC<CalculatorViewProps> = ({expression, display}) => {
  const removeFrontZero = (input: string) => {
      if(input.length > 1 && input[1] !== ".") {
        return input.replace(/^0+/, "")
      }
      return input
    }
  return (
    <>
    <Container style={{
      backgroundColor: '#121212',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10, 
      padding: 0,
      width: "300px",
      height: 200
    }}>
      <Grid container spacing={0} columns={{xs: 12}} alignItems="center" justifyContent="space-between" style={{paddingTop: 20}}>
        <Grid item xs={2}>
          <Link to={'/'}><MenuIcon style={{color: "white", verticalAlign:"middle"}}/></Link>
        </Grid>
   
        <Grid item xs={2}>
          <Link to={'/'}><AccountCircleIcon style={{color: "white", verticalAlign:"middle"}} /></Link>
        </Grid>

        <Grid item xs={12} style={{paddingTop: 60, paddingRight: 30}}>
          <Typography variant="h6" textAlign="end"  style={{color:"#A160FB", fontSize: ((expression.firstInput.length + expression.secondInput.length) > 17 ? 12: 23)}}>
            {/* tsignore */}
            {expression && `${expression.firstInput === "" ? "" : removeFrontZero(expression.firstInput)} ${expression.operator === "" ? "" : expression.operator} ${expression.secondInput === "" ? "" : removeFrontZero(expression.secondInput)}`}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{paddingTop: 0,paddingRight: 30 }}>
          <Typography variant="h4" color="white" textAlign="end" style={{fontSize: (display.length > 10 ? 23: 30)}}>
            {display === "" ? removeFrontZero(expression.firstInput) : removeFrontZero(display)}
          </Typography>
        </Grid>
      </Grid>

    </Container>
    </>
  )
}

export default CalculatorView
