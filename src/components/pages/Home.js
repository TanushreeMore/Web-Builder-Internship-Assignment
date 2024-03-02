import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BuilderCard from "./BuilderCard";
import BuilderSignUp from "./BuilderSignUp";
import BuilderMenu from "./BuilderMenu";
import BuilderBreadcrumbs from "./BuilderBreadcrumbs";
import BuilderInfo from "./BuilderInfo";


// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }


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

      {/* Cards */}
         <BuilderCard />
         <BuilderCard />
         <BuilderCard />   

      {/* Sign up */}
            <BuilderSignUp />
    </div>
  );
};

export default Home;