import express, { urlencoded } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { initializeDatabase } from "./db/db.connection";
import { router as ItemRouter } from "./routers/item.router"
import { router as SaleRouter } from "./routers/sale.router"


dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE"]
}))
initializeDatabase();

const port = process.env.port || 3000;

app.use("/api/items", ItemRouter);
app.use("/api/sales", SaleRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () =>
  console.log('Example app listening on port', port),
);