import express from "express";

import { addAddress, deleteAddress, getAllAddresses, setDefaultAddress, updateAddress } from "../controllers/address.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/add_address").post(
  verifyJWT,
  addAddress
);

router.route("/update_address/:addressId").put(
  verifyJWT,
  updateAddress
);

router.route("/delete_address/:addressId").delete(
  verifyJWT,
  deleteAddress
);

router.route("/get_addresses")
.get(
    verifyJWT,
    getAllAddresses
);

router.route("/set_default/:addressId")
.patch(
    verifyJWT,
    setDefaultAddress
);

export default router;