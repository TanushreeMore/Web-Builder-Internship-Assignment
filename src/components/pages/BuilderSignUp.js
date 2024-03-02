import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import '../css/builderSignUp.css'

const BuilderSignUp = () => {
  return (
    <>
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      boxShadow={1}
      className="builder-signup"
    >
      <Grid item xs={12} sm={6} style={{ color: "gray" }}>
        <Typography variant="h4">
          Sign up and get exclusive special deals
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
        <Button type="button" variant="contained" size="large">
          Sign Up
        </Button>
      </Grid>
    </Grid>
    </>
  )
}

export default BuilderSignUp