const express = require("express");
const router = require("./Routes/email.routes");
const ans = require("./Services/answer");
const service = require("./Services/email.services");
// const route = require("./Routes/email.routes");
const validate = require("./Services/email.services");

const app = express();
// routes
app.use(express.json());

(async () => {
  app.get("/", (req, res) => {
    console.log("server is global");
    res.status(200).send("<p>Server is running Successfullly...!</p>");
  });
  //   app.get("/valid", service.uuidValidation);
  app.use("/valid", router);
  let port = 4000;
  app.listen(port, () => {
    console.log(`server is running on port :${port}`);
  });
})();
