const express = require("express");
const router = express.Router();
const LibroController = require("../controllers/libroController");

router.get("/libros", LibroController.obtenerLibros);

router.post("/insertar", LibroController.insertarLibro);

module.exports = router;
