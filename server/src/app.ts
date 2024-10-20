import express from "express";
import { router } from "./routes";

const PORT = process.env.PORT || 8080;
const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App Listening on Port: ${PORT}`);
});
