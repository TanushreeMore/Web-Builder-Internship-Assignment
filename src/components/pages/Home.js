import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BuilderCard from "./BuilderCard";
import BuilderSignUp from "./BuilderSignUp";
import BuilderMenu from "./BuilderMenu";
import BuilderBreadcrumbs from "./BuilderBreadcrumbs";
import BuilderInfo from "./BuilderInfo";
import BuilderProducts from "./BuilderProducts";

const Home = () => {
  return (
    <div className="p-3 m-5">
      <h1 className="text-center fw-bold p-3">Best Website Builders In The US</h1>
      {/* Horizontal Line */}
      <hr className="opacity-80 fw-bolder " />
      {/* info */}
      <BuilderInfo />
      
      {/* Horizontal Line */}
      <hr className="opacity-80 fw-bolder  " />

      {/* Menu */}
      <BuilderMenu />

      {/* Breadcrumbs */}
      <BuilderBreadcrumbs />
      
      {/* Products */}
      <BuilderProducts />

      {/* Cards */}   
      <Typography variant="h4" style={{marginTop: '28px'}}>Related deals you might like for</Typography>
      <Grid container spacing={3} className="py-5 ms-5 me-5">
      <Grid item xs={12} sm={6} md={4}>
        <BuilderCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BuilderCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BuilderCard />
      </Grid>
    </Grid>

      {/* Sign up */}
            <BuilderSignUp />
    </div>
  );
};

export default Home;
