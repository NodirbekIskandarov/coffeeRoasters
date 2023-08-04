import React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pb: 3,
};
function PlanMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="plan_menu">
        <div className="row justify-content-between">
          <div className="col-4">
            <ul>
              <li>
                <span>01</span>
                <Link className="link" to="/create-plan/prefences">
                  Prefences
                </Link>
              </li>
              <div className="line"></div>
              <li>
                <span>02</span>
                <Link className="link" to="/create-plan/bean">
                  Bean type
                </Link>
              </li>
              <div className="line"></div>

              <li>
                <span>03</span>
                <Link className="link" to="/create-plan/quantity">
                  Quantity
                </Link>
              </li>
              <div className="line"></div>

              <li>
                <span>04</span>
                <Link className="link" to="/create-plan/grind">
                  Grind option
                </Link>
              </li>
              <div className="line"></div>

              <li>
                <span>05</span>
                <Link className="link" to="/create-plan/deliver">
                  Deliveries
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <Outlet />
            <div className="summary">
              <div className="summary_son">
                <h5>Order Summary</h5>
                <p>
                  “I drink my coffee as <span>Filter</span>, with a{" "}
                  <span>Decaf</span> type of bean. <span>250g</span> ground ala{" "}
                  <span>Cafetiére</span>, sent to me <span>Every Week</span>.”
                </p>
              </div>
            </div>
            <button onClick={handleOpen}>Create my plan</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography className="modal_title">
                  <p>Order Summary</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="modal_text">
                    <div className="modal_text_son">
                      <h5>Order Summary</h5>
                      <p>
                        “I drink my coffee as <span>Filter</span>, with a{" "}
                        <span>Decaf</span> type of bean. <span>250g</span>{" "}
                        ground ala <span>Cafetiére</span>, sent to me{" "}
                        <span>Every Week</span>.”
                      </p>
                    </div>
                    <p className="proceed_checkout">
                      Is this correct? You can proceed to checkout or go back to
                      plan selection if something is off. Subscription discount
                      codes can also be redeemed at the checkout.{" "}
                    </p>
                    <div className="checkout">
                      <div className="row">
                        <div className="col-6">
                          <h3>$14.00/ mo</h3>
                        </div>
                        <div className="col-6">
                          <button onClick={handleClose}>Checkout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanMenu;
