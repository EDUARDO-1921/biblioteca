const db = require("../config/database");

class LibroController {
    
    static async obtenerLibros(req, res) {
        let [lista] = await db.query("SELECT * FROM libros");
        res.json(lista);
    }

    static async insertarLibro(req, res) {
        let { titulo, autor, anio_publicacion, disponible } = req.body;
        let libro = await db.query(
            "INSERT INTO libros (titulo, autor, anio_publicacion, disponible) VALUES (?, ?, ?, ?)", 
            [titulo, autor, anio_publicacion, disponible || true]
        );
        res.json(req.body);
    }
}

module.exports = LibroController;

