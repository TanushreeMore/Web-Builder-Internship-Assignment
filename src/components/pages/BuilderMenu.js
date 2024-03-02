import { Box, MenuItem, Typography } from '@mui/material'
import React from 'react'

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
          }}
        >
          {pages.map((page) => (
            <MenuItem
              className="shadow-sm p-2 m-2"
              key={page}
              // onClick={handleCloseNavMenu}
            >
              <Typography
                sx={{ minWidth: 250, fontSize: "20px" }}
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