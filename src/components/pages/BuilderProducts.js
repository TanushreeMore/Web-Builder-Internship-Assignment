import {
  Badge,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

const BuilderProducts = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <List className=" m-3 " dense sx={{ bgcolor: "background.paper" }}>
            {/* 1 */}
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={"Best Choice"}
              color="error"
            >
              <ListItem className="shadow-lg row mb-3 p-3">
                <div className="col-lg-2 col-md-3 col-sm-12 mb-3 mb-md-0">
                  <img
                    className="orderCardImg img-fluid"
                    src="/imgs/builder.png"
                    alt="Builder 1"
                    title="Builder 1"
                  />
                  <Typography
                    variant="h6"
                    className="text-secondary text-center mt-4 opacity-75"
                  >
                    Builder 1
                  </Typography>
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12 mb-3 mb-md-0">
                  <ListItemText>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      WixPro 72-Inch Responsive Website Builder -
                    </Typography>
                    <Typography variant="body1">
                      Comprehensive Digital Platform Creation Tool, Streamlined
                      Design Interface for Professional Websites and Online
                      Stores (Black/Blue)
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginTop: "10px" }}
                    >
                      Main highlights
                    </Typography>
                    <Typography variant="body1">
                      [What You Get]: Receive the WixPro website builder suite,
                      access to premium design templates, an extensive library
                      of widgets and apps, and detailed step-by-step guides.
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "30px",
                        marginTop: "10px",
                        color: "#007bff",
                      }}
                    >
                      Show more
                      <span>
                        <KeyboardArrowDownIcon />
                      </span>
                    </Typography>
                  </ListItemText>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                  <ListItemText>
                    <div
                      className="text-center p-3"
                      style={{ backgroundColor: "#e3f2fd" }}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          className="text-primary fw-bolder "
                        >
                          9.8
                        </Typography>
                        <Typography variant="h6">Exceptional</Typography>
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <br />
                    <Button variant="contained" fullWidth>
                      View
                    </Button>
                  </ListItemText>
                </div>
              </ListItem>
            </Badge>
            {/* 2 */}
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={"Best Value"}
              color="error"
            >
              <ListItem className="shadow-lg row mb-3 p-3">
                <div className="col-lg-2 col-md-3 col-sm-12 mb-3 mb-md-0">
                  <img
                    className="orderCardImg img-fluid"
                    src="/imgs/builder.png"
                    alt="Builder 1"
                    title="Builder 1"
                  />
                  <Typography
                    variant="h6"
                    className="text-secondary text-center mt-4 opacity-75"
                  >
                    Builder
                  </Typography>
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12 mb-3 mb-md-0">
                  <ListItemText>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      SiteCraft 68-Inch Ultimate Web Design Studio -
                    </Typography>
                    <Typography variant="body1">
                      Advanced Site Creation Toolkit, Intuitive Drag-and-Drop
                      Editor for Dynamic Websites and E-commerce Platforms
                      (Green/White)
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginTop: "10px" }}
                    >
                      Main highlights
                    </Typography>
                    <Typography variant="body1">
                      [What You Get]: Gain access to the SiteCraft design
                      studio, featuring a robust selection of design elements,
                      SEO optimization tools, and e-commerce integrations.
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "30px",
                        marginTop: "10px",
                        color: "#007bff",
                      }}
                    >
                      Show more
                      <span>
                        <KeyboardArrowDownIcon />
                      </span>
                    </Typography>
                  </ListItemText>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                  <ListItemText>
                    <div
                      className="text-center p-3"
                      style={{ backgroundColor: "#e3f2fd" }}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          className="text-primary fw-bolder "
                        >
                          9.5
                        </Typography>
                        <Typography variant="h6">Excellent</Typography>
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <br />
                    <Button variant="contained" fullWidth>
                      View
                    </Button>
                  </ListItemText>
                </div>
              </ListItem>
            </Badge>
            {/* 3 */}
            <ListItem className="shadow-lg row mb-3 p-3">
              <div className="col-lg-2 col-md-3 col-sm-12 mb-3 mb-md-0">
                <img
                  className="orderCardImg img-fluid"
                  src="/imgs/builder.png"
                  alt="Builder 1"
                  title="Builder 1"
                />
                <Typography
                  variant="h6"
                  className="text-secondary text-center mt-4 opacity-75"
                >
                  Builder 1
                </Typography>
              </div>

              <div className="col-lg-7 col-md-6 col-sm-12 mb-3 mb-md-0">
                <ListItemText>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    WixPro 72-Inch Responsive Website Builder -
                  </Typography>
                  <Typography variant="body1">
                    Comprehensive Digital Platform Creation Tool, Streamlined
                    Design Interface for Professional Websites and Online Stores
                    (Black/Blue)
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    Main highlights
                  </Typography>
                  <Typography variant="body1">
                    [What You Get]: Receive the WixPro website builder suite,
                    access to premium design templates, an extensive library of
                    widgets and apps, and detailed step-by-step guides.
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "30px",
                      marginTop: "10px",
                      color: "#007bff",
                    }}
                  >
                    Show more
                    <span>
                      <KeyboardArrowDownIcon />
                    </span>
                  </Typography>
                </ListItemText>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                <ListItemText>
                  <div
                    className="text-center p-3"
                    style={{ backgroundColor: "#e3f2fd" }}
                  >
                    <div>
                      <Typography
                        variant="h3"
                        className="text-primary fw-bolder "
                      >
                        9.3
                      </Typography>
                      <Typography variant="h6">Exceptional</Typography>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <Button variant="contained" fullWidth>
                    View
                  </Button>
                </ListItemText>
              </div>
            </ListItem>
            {/* 4 */}
            <ListItem className="shadow-lg row p-3">
              <div className="col-lg-2 col-md-3 col-sm-12 mb-3 mb-md-0">
                <img
                  className="orderCardImg img-fluid"
                  src="/imgs/builder.png"
                  alt="Builder 1"
                  title="Builder 1"
                />
                <Typography
                  variant="h6"
                  className="text-secondary text-center mt-4 opacity-75"
                >
                  CDK
                </Typography>
              </div>

              <div className="col-lg-7 col-md-6 col-sm-12 mb-3 mb-md-0">
                <ListItemText>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    CDK Resposive Builder -
                  </Typography>
                  <Typography variant="body1">
                    An extensive library of widgets and apps, and detailed
                    step-by-step guides
                  </Typography>

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
                        color: "#007bff",
                        padding: "8px",
                        borderRadius: "15%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        className="text-primary fw-bolder"
                      >
                        26% Off
                      </Typography>
                    </div>
                  </Paper>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    Main highlights
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ bgcolor: "#FDF1F5", borderRadius: 1 }}
                  >
                    <List sx={{ p: 0, alignItems: "flex-start" }}>
                      <ListItem>
                        <ListItemText>
                          <Typography
                            variant="body"
                            sx={{
                              textAlign: "center",
                              color: "primary.main",
                              bgcolor: "#fff",
                              fontWeight: "bold",
                              marginRight: "8px",
                            }}
                          >
                            9.9
                          </Typography>
                          <Typography
                            variant="body"
                            sx={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            Building Responsive
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemText>
                          <Typography
                            variant="body"
                            sx={{
                              textAlign: "center",
                              color: "primary.main",
                              bgcolor: "#fff",
                              fontWeight: "bold",
                              marginRight: "8px",
                            }}
                          >
                            8.9{" "}
                          </Typography>
                          <Typography
                            variant="body"
                            sx={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            Cool
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemText>
                          <Typography
                            variant="body"
                            sx={{
                              textAlign: "center",
                              color: "primary.main",
                              bgcolor: "#fff",
                              fontWeight: "bold",
                              marginRight: "8px",
                            }}
                          >
                            8.9{" "}
                          </Typography>
                          <Typography
                            variant="body"
                            sx={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            Docs
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Typography>

                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    Why we love it
                  </Typography>

                  <Typography variant="body1">
                    <List sx={{ p: 0, alignItems: "flex-start" }}>
                      <ListItem>
                        <ListItemText>
                          <Typography
                            variant="body"
                            sx={{
                              marginRight: "8px",
                            }}
                          >
                            <CheckIcon
                              style={{
                                backgroundColor: "#e3f2fd",
                                color: "blue",
                              }}
                            />
                          </Typography>
                          <Typography variant="body" sx={{ textAlign: "left" }}>
                            Documentation
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemText>
                          <Typography
                            variant="body"
                            sx={{
                              marginRight: "8px",
                            }}
                          >
                            <CheckIcon
                              style={{
                                backgroundColor: "#e3f2fd",
                                color: "blue",
                              }}
                            />
                          </Typography>
                          <Typography variant="body" sx={{ textAlign: "left" }}>
                            Easy Use
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemText>
                          <Typography
                            variant="body"
                            sx={{
                              marginRight: "8px",
                            }}
                          >
                            <CheckIcon
                              style={{
                                backgroundColor: "#e3f2fd",
                                color: "blue",
                              }}
                            />
                          </Typography>
                          <Typography variant="body" sx={{ textAlign: "left" }}>
                            Out of box
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "30px",
                      marginTop: "10px",
                      color: "#007bff",
                    }}
                  >
                    Show more
                    <span>
                      <KeyboardArrowDownIcon />
                    </span>
                  </Typography>
                </ListItemText>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                <ListItemText>
                  <div
                    className="text-center p-3"
                    style={{ backgroundColor: "#e3f2fd" }}
                  >
                    <div>
                      <Typography
                        variant="h3"
                        className="text-primary fw-bolder "
                      >
                        9.1
                      </Typography>
                      <Typography variant="h6">Very Good</Typography>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <Button variant="contained" fullWidth>
                    View
                  </Button>
                </ListItemText>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
};

export default BuilderProducts;
