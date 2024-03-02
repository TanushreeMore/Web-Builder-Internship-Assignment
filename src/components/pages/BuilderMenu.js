import { Box, MenuItem, Typography } from '@mui/material'
import React from 'react'
import '../css/builderMenu.css'

const pages = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
];
  
const BuilderMenu = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap",
          }}
        >
          {pages.map((page) => (
            <MenuItem
              className="shadow-sm p-2 m-2"
              key={page}
              style={{
                flex: "1 0 auto", // Set flex to auto to allow for responsive width
                maxWidth: "250px", // Set maximum width for larger screens
                width: "100%", // Set width to 100% to allow for responsive behavior
              }}
            >
              <Typography
                sx={{ fontSize: "20px", textAlign: "center", width: "100%" }}
                textAlign="center"
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </div>
    </>
  )
}

export default BuilderMenu