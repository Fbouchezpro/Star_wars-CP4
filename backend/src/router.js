const express = require("express");

const router = express.Router();

const scriptControllers = require("./controllers/scriptControllers");

router.get("/scripts", scriptControllers.browse);
router.get("/scripts/:id", scriptControllers.read);
router.put("/scripts/:id", scriptControllers.edit);
router.post("/scripts", scriptControllers.add);
router.delete("/scripts/:id", scriptControllers.destroy);

module.exports = router;
