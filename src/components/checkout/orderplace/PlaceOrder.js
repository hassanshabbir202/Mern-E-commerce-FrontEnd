import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css"
import CheckOutNavbar from "../checkoutnavbar/CheckOutNavbar";
import { Container, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { idValue } from "../../../features/CheckOutSlice";

const PlaceOrder = () => {

    const navigate = useNavigate("");

    const idRandomGenerate = () => {
        let random = Math.floor(Math.random()*10);
        return random
    }

    const disptach = useDispatch();

    let myRandomNumber = "#" + idRandomGenerate() + idRandomGenerate() + idRandomGenerate() + idRandomGenerate() + idRandomGenerate() + idRandomGenerate() + idRandomGenerate();

    const viewOrders = () => {
        navigate("/orders");
        disptach(idValue(myRandomNumber));
    }

  return (
    <div>
        <CheckOutNavbar/>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 10 }, p: { xs: 2, md: 3 } , border:"none" , paddingTop:"1rem" , backgroundColor:"#edf1f4" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" , marginTop:"3rem"}}
        >
          <Typography component="h1" variant="h4" align="center" sx={{fontFamily:"Poppins" , fontWeight:"bold"}} className="checkout-heading">
            Place Order
          </Typography>
        
        </Paper>
      </Container>
      <div className="place-order-cont">
        <div className="place-Or">
        <h3 style={{fontFamily:"Poppins"}}> Thank you for your order.</h3>
      <p>
        {" "}
        Your order number is {myRandomNumber}. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </p>
        </div>
      </div>
    <div className="backtohome-cont">
    <button onClick={viewOrders}>View Orders</button>
    </div>
    </div>
  );
};

export default PlaceOrder;
