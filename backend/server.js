import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is runnig on PORT ${port}`);
});
