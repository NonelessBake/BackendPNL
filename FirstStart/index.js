const express = require("express");
const morgan = require("morgan");
const router = require("./routers");

const app = express();
const PORT = 3000;

app.use(morgan("combined"));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App is listening on http://wwww.localhost:${PORT}`);
});
