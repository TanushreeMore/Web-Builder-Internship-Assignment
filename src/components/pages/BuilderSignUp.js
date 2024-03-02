import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const BuilderSignUp = () => {
  return (
    <>
      
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        boxShadow={1}
        style={{ padding: "20px", margin: "10px" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{ color: "gray", paddingLeft: "150px" }}
        >
          <Typography variant="h4">
            Sign up and get exclusive special deals
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ textAlign: "right", paddingRight: "150px" }}
        >
          <Button type="button" variant="contained" size="large">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default BuilderSignUp