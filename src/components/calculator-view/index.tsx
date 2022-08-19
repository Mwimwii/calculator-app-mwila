import { Container, Typography } from '@mui/material'
import React from 'react'
import { CalculatorExpression } from '../../types'


const CalculatorView: React.FC<{expression: CalculatorExpression}> = () => {
  return (
    <>
    {/* create a container for the calculator view with a black background */}
    <Container style={{
      backgroundColor: '#121212',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 0,
      width: "300px",
    }}>
      {/* we need some typography with purple font */}
      <Typography variant="h2" style={{color:"#A160FB"}}>
        {/* the expression will be displayed here */}
        234+74
      </Typography>
      <Typography variant="h1" color="white">
        {/* the expression will be displayed here */}
        308
      </Typography>
    </Container>
    </>
  )
}

export default CalculatorView
