import { Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      //   onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      //   onClick={handleClick}
    >
      Hosting
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/"
      //   onClick={handleClick}
    >
      Hosting6
    </Link>,
    <Link
      underline="hover"
      key="4"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      Hosting for all
    </Link>,
    <Typography key="5" color="text.primary">
      Hosting5
    </Typography>,
  ];

const BuilderBreadcrumbs = () => {
  return (
    <>
        <div>
        <Stack spacing={2}>
          <Breadcrumbs
            style={{ fontSize: "17px", margin: "15px" }}
            separator={<NavigateNextIcon fontSize="large" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
    </>
  )
}

export default BuilderBreadcrumbs