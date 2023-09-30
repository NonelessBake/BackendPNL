const router = require("express").Router();

const products = [
  {
    id: 1,
    productName: "Alex",
    price: 21,
  },
  {
    id: 2,
    productName: "Bob",
    price: 34,
  },
];

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Get", products });
});

router.post("/", (req, res) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const newProduct = { productName, price };
  return res
    .status(200)
    .json({ message: "Post", products: [...products, newProduct] });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const productName = req.body.productName;
  const price = req.body.price;
  const result = products.map((item) => {
    if (item.id == id) {
      item.productName = productName;
      item.price = price;
    }
    return item;
  });
  return res.status(200).json({ message: "Put", products: result });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const productName = req.body.productName;
  const price = req.body.price;
  const result = products.map((item) => {
    if (item.id == id) {
      item.price = price;
    }
    return item;
  });
  return res.status(200).json({ message: "Patch", products: result });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = products.filter((item) => item.id != id);
  return res.status(200).json({ message: "Delete", products: result });
});
module.exports = router;
