const usersRouter = require("./users");
const productsRouter = require("./products");
const router = require("express").Router();
router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
