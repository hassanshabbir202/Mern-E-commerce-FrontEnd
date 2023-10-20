import React from "react";
import "./MyOrders.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MyOrders = () => {
  const cart = useSelector((state) => state.cart.cartData);
  const orderId = useSelector((state) => state.checkout.idValue);
  const cart_quantity = useSelector((state) => state.cart.quantity);

  const navigate = useNavigate();

  const gotoback = () => {
    navigate("/");
  }

  return (
    <div className="ordersmain-div">
        <ArrowBackIcon sx={{marginTop:"1.5rem" , marginLeft:"2rem" , backgroundColor:"#edf1f4" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" , padding:".2rem .2rem" , cursor:"pointer" , borderRadius:"50%"}} onClick={gotoback}/>
      <div className="ordermain-box">
        <div className="order-box">
          <div className="order-header-main">
            <div className="order-header">
              <div className="orderId">
                <p>Order Id</p>
              </div>
              <div className="orderstatus">
                <p>Status</p>
              </div>
              <div className="orderqty">
                <p>Quantity</p>
              </div>
              <div className="orderamount">
                <p>Amount</p>
              </div>
            </div>
          </div>
          <div className="my-orders-main">
            {cart.length > 0 ? cart.map((ele) => {
              return (
                <>
                 <div className="mainmyorders">
                 <div className="myorderId">
                    <p>{orderId}</p>
                  </div>
                  <div className="myorderstatus">
                    <p>Proccessing</p>
                  </div>
                  <div className="myorderqty">
                    <p>{cart_quantity}</p>
                  </div>
                  <div className="myorderamount">
                    <p>${ele.p}</p>
                  </div>
                 </div>
                </>
              );
            }) : <h1 style={{fontFamily:"Poppins" , textAlign:"center" , marginTop:"6rem"}}>No Orders Yet</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
