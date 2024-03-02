import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import React from 'react'

// Styled component for FontAwesome icons
const StyledIcon = styled("i")({
    marginRight: "8px", // Adjust margin as needed
  });

const BuilderInfo = () => {
  return (
    <>
        <div>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StyledIcon className="fa-regular fa-circle-check opacity-25"></StyledIcon>
              <Typography>
                Last Updated - February 22, 2020{" "}
                <span style={{ marginLeft: "88px" }}></span>
              </Typography>
              {/*  </div>
         </Grid>

        <Grid item> 
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>*/}
              <StyledIcon className="fa-solid fa-circle-info"></StyledIcon>
              <Typography>Advertising Disclosure</Typography>
            </div>
          </Grid>

          <Grid item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "8px",
              }}
            >
              <Typography>Top Relevant</Typography>
              <StyledIcon className="fa-solid fa-angle-down"></StyledIcon>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default BuilderInfo