const express = require("express");
const cors = require("cors");
const libroRoutes = require("./routes/libroRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", libroRoutes);

const PORT = 4002;  

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
