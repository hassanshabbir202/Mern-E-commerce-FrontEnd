import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { checkOutShippingData, nameandAdressFunction } from "../../../features/CheckOutSlice";
import { toast } from "react-toastify";
import "./SAdress.css"
import { useNavigate } from "react-router-dom";

const SAdress = () => {

  const disptach = useDispatch();

  const [inputValues , setInputValues] = useState({
    firstName:"",
    lastName:"",
    address:"",
    city:"",
    state:"",
    zip:Number,
    country:"",
  })

  const navigate = useNavigate("");

  useEffect(() => {
    const {firstName , lastName , address} = inputValues
    disptach(checkOutShippingData(firstName , lastName , address))
  },[])


  const movetoNext = () => {
    const {firstName , lastName , address , city , state , zip , country} = inputValues
    if(firstName && lastName && address && city && state && zip && country){
      toast.success("Go to Paynment Details");
      navigate("/checkout/paynmentdetails")
      disptach(nameandAdressFunction({firstName: firstName , lastName: lastName , address: address} ))
    }else{
      toast.error("Plz Fill Out this All Fields!");
    }
  }

  let name , value
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInputValues({...inputValues , [name] : value});

  }

  return (
    <>
    <div className="sadress-container">
      <div className="sadress-div">
      <React.Fragment>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "Poppins" }}>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              value={inputValues.firstName}
              fullWidth
              autoComplete="given-name"
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              value={inputValues.lastName}
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              value={inputValues.address}
              label="Address"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              value={inputValues.city}
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              value={inputValues.state}
              fullWidth
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              value={inputValues.zip}
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              value={inputValues.country}
              autoComplete="country"
              variant="standard"
              sx={{ fontFamily: "Poppins" }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <button onClick={movetoNext} className="movetonext">NEXT</button>
      </div>
      </div>
    </>
  );
};

export default SAdress;
