import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)


const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))