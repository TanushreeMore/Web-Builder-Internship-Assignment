import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const BuilderCard = () => {
  return (
    <>
      <div className=" container">
        <Card sx={{ maxWidth: 450 }} className="container p-5 shadow card ">
          <CardMedia
            component="img"
            alt="builder"
            image="/imgs/builder.png"
            sx={{
              height: 140,
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              objectFit: "scale-down",
            }}
          />

          <Paper
            elevation={0}
            sx={{
              // backgroundColor: "#f5f5f5",
              textAlign: "center",
            //   padding: "5px",
            //   marginBottom: "5px",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <div
              style={{
                backgroundColor: "#F2F4F7",
                padding: "8px",
                borderRadius: "15%",
                margin: "5px",
              }}
            >
              <Typography variant="h6" className="text-primary">
                20% Off
              </Typography>
            </div>
            <div
              style={{
                backgroundColor: "#F2F4F7",
                padding: "8px",
                borderRadius: "15%",
                margin: "5px",
              }}
            >
              <Typography variant="h6" className="text-primary fw-bold ">
                Limited time
              </Typography>
            </div>
          </Paper>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Webbuilder 1
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Computer Modern clasic with wix support
            </Typography>

            <Typography
              variant="h5"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <strong>$39.96</strong>
              <small style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                $49.96
              </small>
              <span className="text-danger">(20% Off)</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant="contained" fullWidth>
              View Deal
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default BuilderCard;
