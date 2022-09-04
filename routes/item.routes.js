module.exports = app => {
    const item = require("../controllers/item.controller");
    var router = require("express").Router();
    router.post("/", item.create);
    router.get("/", item.findAll);
    router.get("/:id", item.findOne);
    router.put("/:id", item.update);
    router.delete("/:id", item.delete);
    app.use('/api/item', router);
  };
  