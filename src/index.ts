import express from "express";
import router from "./routes/app.routes";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import { config } from "./config/env";

const app = express();
const PORT = config.PORT;

app.use(express.json());
app.use(loggerMiddleware);
app.use("/api", router);

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export { app };
app.get("/", (req, res) => {
  res.send("Welcome to the dope-shi server!");
});
