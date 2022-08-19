import { Container, Typography, Grid } from '@mui/material'
import React from 'react'
import { CalculatorExpression } from '../../types'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      height: 180
    }}>
      <Grid container columns={{xs: 12}} alignItems="center" justifyContent="space-between" style={{paddingTop: 20}}>
        <Grid item xs={2}>
          <MenuIcon style={{color: "white", verticalAlign:"middle"}}/>
        </Grid>
   
        <Grid item xs={2}>
          <AccountCircleIcon style={{color: "white", verticalAlign:"middle"}} />
        </Grid>
      </Grid>
        

      {/* we need some typography with purple font */}
      <Typography variant="h5" style={{color:"#A160FB"}}>
        {/* the expression will be displayed here */}
        234+74
      </Typography>
      <Typography variant="h3" color="white">
        {/* the expression will be displayed here */}
        308
      </Typography>

    </Container>
    </>
  )
}

export default CalculatorView
