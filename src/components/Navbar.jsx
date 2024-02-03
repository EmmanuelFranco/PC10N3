import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatarImg from "../assets/image-avatar.png";
import smallImg1 from "../assets/image-product-1-thumbnail.jpg";

const Navbar = ({ price, qty, setQty }) => {
  const [toggle, setToggle] = useState(true);
  const [toggleCart, setToggleCart] = useState(true);

  const fixedPrice = price.toFixed(2);

  const totalPrice = fixedPrice * qty;
  const totalPriceFixed = totalPrice.toFixed(2);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            onClick={toggleHandler}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="sneakers-logo" />
          </Typography>

          <List
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Button color="inherit">Collections</Button>
            <Button color="inherit">Men</Button>
            <Button color="inherit">Women</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </List>

          <div
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              position: "relative",
            }}
          >
            {qty > 0 && (
              <span
                sx={{
                  backgroundColor: "orange",
                  px: 2,
                  fontSize: 10,
                  borderRadius: 12,
                  color: "white",
                  position: "absolute",
                  top: 0,
                  left: 7,
                }}
              >
                {qty}
              </span>
            )}

            <div className="flex-row">
              <IconButton
                onClick={() => setToggleCart((prev) => !prev)}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
              <Avatar
                src={avatarImg}
                sx={{
                  width: 30,
                  height: 30,
                  transition: "all 0.3s",
                  marginLeft: 1,
                }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={!toggle}
        onClose={() => setToggle(true)}
        sx={{ width: "70%" }}
      >
        <List>
          {["Collections", "Men", "Women", "About", "Contact"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      <Drawer
        anchor="right"
        open={!toggleCart}
        onClose={() => setToggleCart(true)}
        sx={{ width: "350px", md: { width: "370px" } }}
      >
        <div
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Cart</Typography>
          <hr sx={{ width: "100%", my: 2 }} />
          {qty !== 0 ? (
            <div sx={{ width: "100%", display: "flex", gap: 2 }}>
              <div sx={{ width: "30%" }}>
                <img
                  src={smallImg1}
                  alt=""
                  sx={{ width: "100%", borderRadius: 1 }}
                />
              </div>
              <div sx={{ width: "40%", textAlign: "left" }}>
                <Typography color="textPrimary">
                  Fall limited edition sneakers
                </Typography>
                <Typography color="textPrimary">
                  ${fixedPrice} x {qty} = ${totalPriceFixed}
                </Typography>
              </div>
              <div sx={{ width: "30%" }}>
                <IconButton
                  onClick={() => setQty(0)}
                  color="inherit"
                  sx={{ marginTop: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            <div>
              <Typography variant="body1" color="textSecondary">
                Your cart is empty.
              </Typography>
            </div>
          )}
          <Button
            sx={{ backgroundColor: "orange", color: "white", mt: 2 }}
            onClick={() => setToggleCart(true)}
          >
            Checkout
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
