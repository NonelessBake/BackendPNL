const router = require("express").Router();

const users = [
  {
    id: 1,
    name: "Alex",
    age: 21,
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
  },
];

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Get", users });
});

router.post("/", (req, res) => {
  const username = req.body.username;
  const age = req.body.age;
  const newUser = { username, age };
  return res.status(200).json({ message: "Post", users: [...users, newUser] });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const username = req.body.username;
  const age = req.body.age;
  const result = users.map((item) => {
    if (item.id == id) {
      item.username = username;
      item.age = age;
    }
    return item;
  });
  return res.status(200).json({ message: "Put", users: result });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const username = req.body.username;
  const age = req.body.age;
  const result = users.map((item) => {
    if (item.id == id) {
      item.age = age;
    }
    return item;
  });
  return res.status(200).json({ message: "Patch", users: result });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = users.filter((item) => item.id != id);
  return res.status(200).json({ message: "Delete", users: result });
});
module.exports = router;
