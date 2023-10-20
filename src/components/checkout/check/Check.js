import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Review from "../review/Review";
import Paynment from "../paynment/Paynment";
import SAdress from "../sadress/SAdress";

import "./Check.css"
import CheckOutNavbar from "../checkoutnavbar/CheckOutNavbar";

const steps = ["Shipping address", "Payment details", "Review your order"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <SAdress/>;
//     case 1:
//       return <Paynment/>;
//     case 2:
//       return <Review/>;
//     default:
//       throw new Error("Unknown step");
//   }
// }

export default function Check() {
  const [activeStep, setActiveStep] = React.useState(0);



  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
       <CheckOutNavbar/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } , border:"none" , paddingTop:"1rem" , backgroundColor:"#edf1f4" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
        >
          <Typography component="h1" variant="h4" align="center" sx={{fontFamily:"Poppins" , fontWeight:"bold"}} className="checkout-heading">
            Checkout
          </Typography>
          {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel sx={{fontFamily:"Poppins"}}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          {/* {activeStep === steps.length ? (
           
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

             
              </Box>
            </React.Fragment>
          )} */}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
