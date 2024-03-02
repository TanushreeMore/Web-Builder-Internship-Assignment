import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    href="/"
  >
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/"
  >
    Hosting
  </Link>,
  <Link
    underline="hover"
    key="3"
    color="inherit"
    href="/"
  >
    Hosting6
  </Link>,
  <Link
    underline="hover"
    key="4"
    color="inherit"
    href="/"
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
      <style jsx>{`
        @media (max-width: 768px) {
          /* Adjust styles for smaller screens */
          .breadcrumbs > span {
            display: block;
            margin-bottom: 5px;
          }
        }
      `}</style>
    </>
  )
}

export default BuilderBreadcrumbs;
