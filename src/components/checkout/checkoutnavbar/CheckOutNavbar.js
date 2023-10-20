import { AppBar, Toolbar, Typography } from '@mui/material'
import eshoplogo from "../../../assets/logo.png"
import React from 'react'

const CheckOutNavbar = () => {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar sx={{backgroundColor:"#edf1f4"}}>
          <Typography variant="h6"  noWrap className="maincheckotnav">
            <img className="checkoutlogo" src={eshoplogo} alt="" />
          </Typography>
        </Toolbar>
      </AppBar> 
    </>
  )
}

export default CheckOutNavbar
