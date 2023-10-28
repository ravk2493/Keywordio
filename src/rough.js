import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import mediaimg from "./Resource/media.png";
import txtimg from "./Resource/text.png";
import { grey } from "@mui/material/colors";

const Rough = () => {
  return (
    <Grid
      sx={{
        position: "absolute",
        height: "86%",
        width: "98%",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ position: "absolute", top: "3%", left: "2%" }}>
        CreateAds
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "25vw",
          backgroundColor: "white",
          height: "60vh",
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          width="25vw"
          height="50vh"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
        >
          <FormGroup>
            <FormControlLabel
              style={{ position: "absolute", top: "1%", left: "4%" }}
              control={<Checkbox />}
            />
          </FormGroup>
          <img
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              height: "43vh",
              width: "18vw",
            }}
            src={txtimg}
            alt="Text Advertisement"
          />
        </Box>
        <Box>
          <div
            style={{
              position: "absolute",
              top: "50vh",
              left: "0vw",
              backgroundColor: "#f5f5f5",
              width: "25vw",
              height: "10vh",
            }}
          >
            <Typography style={{ textAlign: "center" }}>Create</Typography>
            <Typography style={{ textAlign: "center" }}>Text Ad</Typography>
          </div>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "20%",
          left: "50%",
          width: "25vw",
          backgroundColor: "white",
          height: "60vh",
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          width="25vw"
          height="50vh"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
        >
          <FormGroup>
            <FormControlLabel
              style={{ position: "absolute", top: "1%", left: "4%" }}
              control={<Checkbox />}
            />
          </FormGroup>
          <img
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              height: "43vh",
              width: "18vw",
            }}
            src={mediaimg}
            alt="Text Advertisement"
          />
        </Box>
        <Box bgcolor={grey}>
          <div
            style={{
              position: "absolute",
              top: "50vh",
              left: "0vw",
              backgroundColor: "#f5f5f5",
              width: "25vw",
              height: "10vh",
            }}
          >
            <Typography style={{ textAlign: "center" }}>Create</Typography>
            <Typography style={{ textAlign: "center" }}>Media Ad</Typography>
          </div>
        </Box>
      </div>
      <Button
        sx={{ width: "10%", position: "absolute", top: "90%", left: "89%" }}
        variant="contained"
      >
        Next
      </Button>
    </Grid>
  );
};

export default Rough;
