import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CheckOutNavbar from "../checkoutnavbar/CheckOutNavbar";
import { Container, Paper } from "@mui/material";
import "./Paynment.css"

const Paynment = () => {
  const [paynmentInputValues, setPaynmentInputValues] = useState({
    nameOfCard: "",
    cardNumber: Number,
    expiryData: Number,
    CVV: Number,
  });

  const navigate = useNavigate("")

  let name , value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setPaynmentInputValues({...paynmentInputValues , [name]: value});
  }

  const gotoPlaceOrder = () => {
    const {nameOfCard , cardNumber , expiryData , CVV} = paynmentInputValues;
    if(cardNumber.length !== 16){
      toast.error("Invalid Card Number");
    }
   else if(nameOfCard && cardNumber && expiryData && CVV){
      toast.success("Go to Reviw Order");
      navigate("/checkout/reviworder")
    } 
    else{
      toast.error("Plz Fill Out this All Fields!");
    }
  }

  const backToSAdress = () => {
    navigate("/checkout/")
  }

  // else if(cardNumber.length < 16 && cardNumber.length > 16){
  //   toast.error("Invalid Card Number");
  // }

  return (
    <>
    <CheckOutNavbar/>
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } , border:"none" , paddingTop:"1rem" , backgroundColor:"#edf1f4" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
        >
          <Typography component="h1" variant="h4" align="center" sx={{fontFamily:"Poppins" , fontWeight:"bold"}} className="checkout-heading">
            Paynmet Details
          </Typography>
        
        </Paper>
      </Container>
      <div className="paynmet-container">
         <div className="paynment-det">
         <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              name="nameOfCard"
              value={paynmentInputValues.nameOfCard}
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="number"
              id="cardNumber"
              label="Card number"
              name="cardNumber"
              value={paynmentInputValues.cardNumber}
              fullWidth
              autoComplete="cc-number"
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="number"
              id="expDate"
              label="Expiry date"
              name="expiryData"
              value={paynmentInputValues.expiryData}
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              type="number"
              fullWidth
              name="CVV"
              onChange={handleChange}
              value={paynmentInputValues.CVV}
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <button onClick={backToSAdress} className="backBtn">Back</button>
        <button onClick={gotoPlaceOrder} className="nxtBtn">Next</button>
         </div>
      </div>
    </>
  );
};

export default Paynment;
