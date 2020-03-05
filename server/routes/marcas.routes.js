const express = require("express");
const router = express.Router();

const marcas = require("../controllers/marcas.controller");

router.get("/", marcas.getMarcas);
router.post("/", marcas.createMarcas);
router.get("/:id", marcas.getMarca);
router.put("/:id", marcas.updateMarca);
router.delete("/:id", marcas.deleteMarca);

module.exports = router;