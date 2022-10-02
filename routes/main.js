const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const companyController = require("../controllers/company")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/newCompany", homeController.newCompany);
// router.get("/newContact", homeController.newContact);
// router.get("/:id", ensureAuth, companyController.getCompany)

router.get("/profile", ensureAuth, companyController.getProfile);


router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;